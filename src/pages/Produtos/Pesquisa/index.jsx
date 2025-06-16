import axios from "axios";
import { useEffect, useState } from "react";
import * as styles from "./Pesquisa.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
import { Box } from "@mui/material";

export default function GetProdutosPorNome() {
    const [produtos, setProdutos] = useState([]);
    {/*const [nome, setNome] = useState("");*/ }
    const [buscou, setBuscou] = useState(false);
    const { nome } = useParams([]);

    const buscarProdutosPorNome = () => {
        setBuscou(true);
        axios.get(`http://localhost:8080/produtos/listar/${nome}`)
            .then((response) => setProdutos(response.data))
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
                setProdutos([]);
            });
    };

    useEffect(() => {
        if (nome) {
            buscarProdutosPorNome(nome);
        }
    }, [nome]);

    function deletePost(id) {
        axios.delete(`http://localhost:8080/produtos/deletar/${id}`)
            .then(() => {
                console.log("Apagado");
                setProdutos(produtos.filter((prod) => prod.id !== id))
            })
            .catch(() => {
                console.error("Não encontrado");
            })
    };

    return (
        <div>

            <Header />
            <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Resultado da pesquisa:
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {produtos.length > 0 ? produtos.map((produto) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={produto.id}>
                            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={produto.url}
                                    alt={produto.nome}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" noWrap>
                                        {produto.nome}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        Valor: R$ {produto.valor}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        Categoria: {produto.categoria}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        Plataforma: {produto.plataforma}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={'/'}>
                                        <Button size="small">Home</Button>
                                    </Link>
                                    <div>
                                        <Button onClick={() => deletePost(produto.id)}>Apagar</Button>
                                    </div>
                                    <Link to={'/carrinho'}>
                                        <Button size="small">Comprar</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )) : (
                        buscou && <div className={styles.item}>
                                <h3>Nenhum produto encontrado :( </h3>
                                <p>Abaixo algumas dicas para encontrar o que precisa:</p>
                                <div className={styles.item2}>
                                    <li>Confira se os termos digitados estão corretos</li>
                                    <li>Utilize menos palavras, ou palavras genéricas</li>
                                    <li>Você pode pesquisar coisas como: títulos de jogos, títulos de franquias, títulos de DLC.</li>
                                </div>
                        </div>
                    )
                    }
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}
