import axios from "axios";
import { useState } from "react";
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
import { Link } from 'react-router-dom';

export default function GetProdutosPorNome() {
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState("");
    const [buscou, setBuscou] = useState(false);

    const buscarProdutosPorNome = () => {
        setBuscou(true);
        axios.get(`http://localhost:8080/produtos/listar/${nome}`)
            .then((response) => setProdutos(response.data))
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
                setProdutos([]);
            });
    };

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
            <main className={styles.container}>

                <div className={styles.form}>
                    <input
                        type="text"
                        className={styles.produto}
                        placeholder="Digite o nome do jogo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <button className={styles.botao} onClick={buscarProdutosPorNome}>
                        Buscar
                    </button>
                </div>

                <div className={styles.lista}>
                    {
                        produtos.length > 0 ? produtos.map((produto) => (
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
                            buscou && <li className={styles.item}>Nenhum produto encontrado</li>
                        )
                    }
                </div>
            </main>
            <Footer />
        </div>
    );
}
