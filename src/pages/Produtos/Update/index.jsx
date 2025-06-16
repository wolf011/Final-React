import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import * as styles from "./UpdateProduto.module.css";
import {
  Typography, TextField
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


export default function UpdateProduto() {
  const { nome} = useParams();
  let navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [id, setId] = useState(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {

    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}`} : {};

    axios.get("http://localhost:8080/categorias/listar", {headers})
      .then((res) => { setCategorias(res.data) });
  }, []);

  useEffect(() => {

    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}`} : {};

    axios
      .get(`http://localhost:8080/produtos/listar/${nome}`, {headers})
      .then((response) => {
        if (response.data.length > 0) {
          reset(response.data[0]);
          setId(response.data[0].id);
        } else {
          console.warn("Nenhum produto encontrado com esse nome");
        }
      })
      .catch(() => {
        console.error("Deu problema na requisição");
      });
  }, []);

  const alterar = (data) => {
    const { id, ...resto } = data;
    const dadosProd = {
      ...resto,
      categoria: {
        id: parseInt(data.categoria),
      },
    };
  
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}`} : {};
 
    axios
      .put(`http://localhost:8080/produtos/atualizar/${id}`, dadosProd, {headers})
      .then(() => {
        console.log("Atualização realizada");
        navigate("/Produtos");
      })
      .catch(() => console.error("Deu errado"));

  };

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(alterar)}>

              <Typography variant="h4" align="center">
                Alterar Produto
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
                />
                <p className={styles.errorMessage}>{errors.url?.message}</p>
              </div>

              <hr />

              <div className={styles.button}>
                <Typography variant="body2" align="center">
                  <button className={styles.enviarButton} type="submit">
                    Alterar Produto
                  </button>
                </Typography>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
