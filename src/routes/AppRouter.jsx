import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Carrinho from "../pages/Carrinho";
import GetProdutos from "../pages/Produtos";
import CadastroProdutos from "../pages/Produtos/Inserir";
import GetProdutosPorNome from "../pages/Produtos/Pesquisa";
import UpdateProduto from "../pages/Produtos/Update";
import Error from "../pages/Error";


export const AppRouter = () => {
  return (
    <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/login" element={<Login/>}></Route>
        <Route  path="/cadastro" element={<Cadastro/>}></Route>
        <Route  path="/carrinho" element={<Carrinho/>}></Route>
        <Route  path="/Produtos" element={<GetProdutos/>}></Route>
        <Route  path="/Produtos/Pesquisa" element={<GetProdutosPorNome/>}></Route>
        <Route path="/Produtos/Pesquisa/:nome" element={<GetProdutosPorNome />} />
        <Route  path="/Produtos/Inserir" element={<CadastroProdutos/>}></Route>
        <Route  path="/Produtos/Atualizar/:nome" element={<UpdateProduto/>}></Route>
        <Route  path="*" element={<Error/>}></Route>


    </Routes>
  );
}
