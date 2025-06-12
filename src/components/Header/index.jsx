import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <div className={styles["logo-container"]}>
            <img src={logo}/>
            <h2>Dragon Store </h2>
            </div>

            <div className={styles["menu"]}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                        <li>
                            <Link to="/cadastro">Cadastro</Link>
                        </li>

                        <li>
                            <Link to="/carrinho">Carrinho</Link>
                        </li>

                        <li>
                            <Link to="/inserirProdutos">Produtos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
