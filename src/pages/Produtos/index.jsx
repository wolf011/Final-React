import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';


export default function GetProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/produtos/listar")
      .then((response) => setProdutos(response.data))
      .catch(() => console.error("Erro ao buscar produtos"));
  }, []);

  function deletePost(id) {

    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios.delete(`http://localhost:8080/produtos/deletar/${id}`, { headers })
      .then(() => {
        console.log("Apagado");
        setProdutos(produtos.filter((prod) => prod.id !== id))
      })
      .catch(() => {
        console.error("Não encontrado");
      })
  }

  return (
    <div>
      <Header />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Catálogo de Produtos
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {produtos.map((produto) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={produto.id}>
              <Card sx={(theme) => ({
                maxWidth: 345,
                margin: "auto",
                backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
                boxShadow: theme.palette.mode === "dark" ? "0 0 10px #000" : "0 0 10px #ccc",
              })}>
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
                  <Typography variant="body2" color="text.primary" >
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
                  <div>
                    {(localStorage.getItem('perfilId') == 1 || localStorage.getItem('perfilId') == 3) ? <Button onClick={() => deletePost(produto.id)}>Apagar</Button> : null}
                  </div>
                  
                  <Link to={'/carrinho'}>
                    <Button size="small">Comprar</Button>
                  </Link>

                  <Link to={`/Produtos/Atualizar/${produto.nome}`}>
                    {(localStorage.getItem('perfilId') == 1 || localStorage.getItem('perfilId') == 3) ? <Button size="small">Atualizar</Button> : null}
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
