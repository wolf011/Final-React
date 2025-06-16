import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import DarkModeButton from "../../contexts/DarkModeButton";
import GetProdutosPorNome from "../../pages/Produtos/Pesquisa";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Header() {

    const [inputNome, setInputNome] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputNome.trim() !== "") {
            navigate(`/Produtos/Pesquisa/${inputNome}`);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                <img src={logo} />
                <h2>Dragon Store </h2>
            </div>


            <form onSubmit={handleSearch} className={styles.formHeader}>
                <input className="input"
                    type="text"
                    placeholder="Buscar produto..."
                    value={inputNome}
                    onChange={(e) => setInputNome(e.target.value)}
                />
                <button type="submit" className={styles.buttonHeader}>
                    <FaMagnifyingGlass size={24} color="#ff0000" />
                </button>
            </form>

            <div className={styles.menuToggle} onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            <nav className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                <nav>
                    <ul>
                        <li className={styles.link}>
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
                            {(localStorage.getItem('perfilId') === 1 || localStorage.getItem('perfilId') === 3) ? <Link to="/Produtos/Inserir">Inserir</Link> : null}
                        </li>

                        <li>
                            <DarkModeButton />
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
    )
}
