import axios from "axios";
import { useState } from "react";
import * as styles from "./Pesquisa.module.css";

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

    return (
        <div className={styles.container}>
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
                        <div key={produto.id} className={styles.item}>
                            <img
                                src={produto.url}
                                alt={`Capa do jogo ${produto.nome}`}
                                className={styles.imagem}
                            />
                            <div className={styles.info}>
                                <strong>Jogo:</strong> {produto.nome} <br />
                                <strong>Valor:</strong> R$ {produto.valor} <br />
                                <strong>Categoria:</strong> {produto.categoria} <br />
                                <strong>Plataforma:</strong> {produto.plataforma}
                            </div>
                        </div>
                    )) : (
                        buscou && <li className={styles.item}>Nenhum produto encontrado</li>
                    )
                }
            </div>
        </div>
    );
}
