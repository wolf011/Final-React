import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Card,
  Grid,
  List,
  Typography,
} from "@mui/material";
import "./style.css";

export default function Login() {
  return (
    <div>
      <Header />

      <Box
        className="main-content"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card variant="elevation" className="login-card">
          <Typography variant="h4" align="center">
            Login
          </Typography>
          <Typography variant="body1" align="center">
            Faça seu login para acessar seu cadastro.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Box className="input-field">
              <Typography variant="body2">Email</Typography>
            </Box>
            <Box className="input-field">
              <Typography variant="body2">Senha</Typography>
            </Box>
            <Typography variant="body2" align="center">
              Esqueceu sua senha?
            </Typography>
            <Box className="login-button">
              <Typography variant="button">Login</Typography>
            </Box>
            <Typography variant="body2" align="center">
              Não tem uma conta?{" "}
              <span className="create-account">Crie uma aqui</span>
            </Typography>
          </Box>
        </Card>

      </Box>
      <Footer />
    </div>
  )
}
