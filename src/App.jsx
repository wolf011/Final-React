import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import "./index.css";
import ThemeProvider, { useTheme } from "./contexts/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {darkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
};


const MainContent = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header>
        <h1>{darkMode ? "Modo Escuro" : "Modo Claro"}</h1>
        <ThemeToggle />
      </header>

      <main>
        <AppRouter />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
