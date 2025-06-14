import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Carrinho from "../pages/Carrinho";
import CadastroProdutos from "../pages/Produtos";
import GetProdutosPorNome from "../components/Pesquisa/ProdutoPorNome";
import Error from "../pages/Error";


export const AppRouter = () => {
  return (
    <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/login" element={<Login/>}></Route>
        <Route  path="/cadastro" element={<Cadastro/>}></Route>
        <Route  path="/carrinho" element={<Carrinho/>}></Route>
        <Route  path="/Produtos" element={<CadastroProdutos/>}></Route>
        <Route  path="/Produtos/buscar" element={<GetProdutosPorNome/>}></Route>
        <Route  path="*" element={<Error/>}></Route>


    </Routes>
  );
}
