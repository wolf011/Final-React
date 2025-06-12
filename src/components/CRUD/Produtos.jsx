import axios from "axios"
import { useEffect, useState } from "react";

export default function GetProdutos() {
    const [produtos, setProdutos] = useState([]);

    //Get all produtos
    const buscarProdutos = () => {
        axios.get("http://localhost:8080/produtos/listar")
            .then((Response) => setProdutos(Response.data))
            .catch(() => console.error("Erro ao buscar produtos"));
    }

    useEffect(() => {
        buscarProdutos();
    }, [])

    return (
        <div className="container">
            <h2>Listagem de Produtos</h2>
            <ul className="list-group">
                {
                    produtos.map((produto) => (
                        <li key={produto.id} className="list-group-item">Jogo: {produto.nome} <br/> Valor: R$ {produto.valor} <br/>Categoria: {produto.categoria} <br/>Plataforma: {produto.plataforma} <br/></li>
                    ))
                }
            </ul>
        </div>
    )
}
