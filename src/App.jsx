import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import ThemeProvider from "./contexts/ThemeContext";
import BotaoChat from "./contexts/BotaoChat";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <BotaoChat />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}