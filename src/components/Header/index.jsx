import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import GetProdutosPorNome from "../../pages/Produtos/Pesquisa";
// import { GrActions } from "react-icons/gr";
import { FaMagnifyingGlass } from "react-icons/fa6";

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

                        <li>
                            <Link to="/Produtos/Pesquisa"><img src={FaMagnifyingGlass} /></Link>
                        </li>

                        <li>
                            <Link to="/Produtos/Inserir">Inserir</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
