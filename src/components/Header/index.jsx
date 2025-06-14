import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import GetProdutosPorNome from "../Pesquisa/ProdutoPorNome";
// import { GrActions } from "react-icons/gr";

export default function Header() {

    
    const ThemeToggle = () => {
      const { darkMode, toggleTheme } = useTheme();
    
      return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      );
    };

    return (
        <header>
            <div className={styles["logo-container"]}>
            <img src={logo}/>
            <h2>Dragon Store </h2>
            </div>

            {/* <div>
                <GetProdutosPorNome/>
            </div> */}

            <div>
                <ThemeToggle/>
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
                            <Link to="/Produtos">Produtos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
