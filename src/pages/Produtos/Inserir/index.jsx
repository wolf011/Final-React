import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import * as styles from "./CadastroProduto.module.css";
import {
  Typography, TextField,
  Box,
  Card
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";


const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome deve ser informado")
    .max(100, "Tamanho máximo permitido"),
  valor: yup
    .string()
    .required("O valor do produto não foi preenchido")
    .max(6, "Tamanho máximo permitido"),
  categoria: yup
    .string()
    .required("A categoria do produto não foi preenchida")
    .max(40, "Tamanho máximo permitido"),
  plataforma: yup
    .string()
    .required("A platafomra do produto não foi preenchida")
    .max(40, "Tamanho máximo permitido"),
  url: yup
    .string()
    .required("O endereço da imagem do produto não foi preenchido")
    .max(255, "Tamanho máximo permitido"),
});


export default function CadastroProduto() {
  let navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {

    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios.get("http://localhost:8080/categorias/listar", {headers})
      .then((res) => { setCategorias(res.data) });
  }, []);

  const addPost = (data) => {
    const dadosProd = {
      ...data,
      categoria: {
        id: parseInt(data.categoria),
      },
    };

      const token = localStorage.getItem('token');
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios
      .post("http://localhost:8080/produtos/inserir", dadosProd, {headers})
      .then(() => {
        console.log("Cadastro realizado");
        navigate("/Produtos");
      })
      .catch(() => console.error("Cadastro falhou"));
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
      padding: 5,   
      }}>
        <Card variant="elevation" className="login-card" sx={{ padding: 2, boxShadow: 3 }}>
          <Box p={2} component="form">
            <form onSubmit={handleSubmit(addPost)}>

              <Typography variant="h4" align="center">
                Cadastro de Produtos
              </Typography>

              <Typography variant="h6">Dados do Produto</Typography>
              <hr />

              <div className={styles.inputsRow}>
                <TextField
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  type="text"
                  {...register("nome")}
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
                <p className={styles.errorMessage}>{errors.nome?.message}</p>
              </div>

              <div className={styles.dadosPessoais}>
                <TextField
                  fullWidth
                  label="Preço"
                  variant="outlined"
                  type="number"
                  {...register("valor")}
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
                <p className={styles.errorMessage}>{errors.valor?.message}</p>
              </div>

              <div className={styles.dadosPessoais}>
                <TextField
                  select
                  fullWidth
                  label="Categoria"
                  variant="outlined"
                  {...register("categoria")}
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
                >
                  {categorias.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.nome}
                    </MenuItem>
                  ))}
                </TextField>
                <p className={styles.errorMessage}>{errors.categoria?.message}</p>
              </div>

              <div className={styles.dadosPessoais}>
                <TextField
                  fullWidth
                  label="Plataforma"
                  variant="outlined"
                  type="text"
                  {...register("plataforma")}
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
                <p className={styles.errorMessage}>{errors.plataforma?.message}</p>
              </div>

              <div className={styles.dadosPessoais}>
                <TextField
                  fullWidth
                  label="Endereço da imagem"
                  variant="outlined"
                  type="url"
                  {...register("url")}
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
                <p className={styles.errorMessage}>{errors.url?.message}</p>
              </div>

              <hr />

              <div className={styles.button}>
                <Typography variant="body2" align="center">
                  <button className={styles.enviarButton} type="submit">
                    Inserir Produto
                  </button>
                </Typography>
              </div>
            </form>
          </Box>
        </Card>
      </Box>
      <Footer />
    </div>
  );
}
