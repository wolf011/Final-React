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
import * as styles from "./Login.module.css";

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
      <Box className="main-content" display="flex" justifyContent="center" alignItems="center"
        sx={{
          minHeight: "calc(100vh - 200px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}>
        <Card variant="elevation" className="login-card" sx={{ padding: 2, boxShadow: 3 }}>
          <Typography variant="h4" align="center">Login</Typography>
          <Typography variant="body1" align="center">
            Faça seu login para acessar seu cadastro.
          </Typography>

          <Box p={2} component="form" noValidate autoComplete="off" onSubmit={handleSubmit(logar)}>


            <TextField
              label="Email"
              fullWidth
              type="text"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
              sx={{
                    input: { color: "#e0e0e0" }, // Cor do texto digitado
                    "& .MuiInputLabel-root": { color: "#b0b0b0" }, // Cor padrão do label
                    "& .MuiInputLabel-root.Mui-focused": { color: "#ff3b3f" }, // Cor do label quando focado
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#b0b0b0" }, // Cor da borda normal
                      "&:hover fieldset": { borderColor: "#ff3b3f" }, // Borda no hover
                      "&.Mui-focused fieldset": { borderColor: "#ff3b3f" }, // Borda quando focado
                    },
                  }}
            />



            <TextField
              label="Senha"
              fullWidth
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}

              sx={{
                mt: 2,
                    input: { color: "#e0e0e0" }, // Cor do texto digitado
                    "& .MuiInputLabel-root": { color: "#b0b0b0" }, // Cor padrão do label
                    "& .MuiInputLabel-root.Mui-focused": { color: "#ff3b3f" }, // Cor do label quando focado
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#b0b0b0" }, // Cor da borda normal
                      "&:hover fieldset": { borderColor: "#ff3b3f" }, // Borda no hover
                      "&.Mui-focused fieldset": { borderColor: "#ff3b3f" }, // Borda quando focado
                    },
                  }}
            />


            <div className={styles.button}>
              <Typography variant="body2" align="center"><button className={styles.loginButton} type="submit">Login</button></Typography>
            </div>

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
