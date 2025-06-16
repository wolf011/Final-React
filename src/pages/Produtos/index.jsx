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

    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios.get("http://localhost:8080/produtos/listar", { headers })
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
                  <div>
                    <Button onClick={() => deletePost(produto.id)}>Apagar</Button>
                  </div>
                  <Link to={'/carrinho'}>
                    <Button size="small">Comprar</Button>
                  </Link>
                  <Link to={`/Produtos/Atualizar/${produto.nome}`}>
                    <Button size="small">Atualizar</Button>
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
