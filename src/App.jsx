import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import ThemeProvider from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}