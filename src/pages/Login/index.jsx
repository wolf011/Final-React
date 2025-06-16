import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Box, Card, TextField, Typography } from "@mui/material";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const validationPost = yup.object().shape({
  username: yup.string().required("Informe o usuário (e-mail)"),
  password: yup.string().required("Informe a senha"),
});

export default function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const logar = (data) => {
    axios
      .post("http://localhost:8080/autorizar/logar", data)
      .then((response) => {
        setToken(response.data);
        localStorage.setItem("token", response.data);
        console.log("Logado com sucesso:", response.data);
        navigate("/Produtos");
      })
      .catch(() => console.error("Login falhou"));
  };

  return (
    <div>
      <Header />
      <Box className="main-content" display="flex" justifyContent="center" alignItems="center">
        <Card variant="elevation" className="login-card">
          <Typography variant="h4" align="center">Login</Typography>
          <Typography variant="body1" align="center">
            Faça seu login para acessar seu cadastro.
          </Typography>

          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(logar)}>

            <Box className="input-field">
              <Typography variant="body2">Usuário (e-mail)</Typography>
              <TextField
                fullWidth
                type="text"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </Box>

            <Box className="input-field">
              <Typography variant="body2">Senha</Typography>
              <TextField
                fullWidth
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Box>

            <Box className="login-button">
              <button variant="button">Login</button>
            </Box>

            <Typography variant="body2" align="center">
              Não tem uma conta?{" "}
              <Link to="/cadastro" className="create-account">Crie uma aqui</Link>
            </Typography>
          </Box>
        </Card>
      </Box>
      <Footer />
    </div>
  );
}
