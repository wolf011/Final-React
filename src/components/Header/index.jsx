import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import DarkModeButton from "../../contexts/DarkModeButton";
import GetProdutosPorNome from "../../pages/Produtos/Pesquisa";
// import { GrActions } from "react-icons/gr";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

export default function Header() {

    const [inputNome, setInputNome] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputNome.trim() !== "") {
            navigate(`/Produtos/Pesquisa/${inputNome}`);
        }
    };

    
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
                <DarkModeButton />
            </div> */}

            <form onSubmit={handleSearch} className={styles["search-form"]}>
                <input className="input"
                    type="text"
                    placeholder="Buscar produto..."
                    value={inputNome}
                    onChange={(e) => setInputNome(e.target.value)}
                />
                <button type="submit">
                <FaMagnifyingGlass size={24} color="#ff0000" />
                </button>
            </form>

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
                            <Link to="/Produtos/Inserir">Inserir</Link>
                        </li>

                       <li>
                <DarkModeButton />
            </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
