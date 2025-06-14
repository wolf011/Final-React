import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as styles from "./Cadastro.module.css";
import { Typography, TextField
} from "@mui/material";


const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome deve ser informado")
    .max(40, "Tamanho máximo permitido"),
  telefone: yup
    .string()
    .required("O telefone não foi preenchido")
    .max(14, "Tamanho máximo permitido"),
  email: yup
    .string()
    .required("O email não foi preenchido")
    .max(500, "Tamanho máximo permitido"),
  cpf: yup
    .string()
    .required("O cpf não foi preenchido")
    .max(11, "Tamanho máximo permitido"),
  senha: yup
    .string()
    .required("A senha não foi informada")
    .max(50, "Tamanho máximo permitido"),
  complemento: yup
    .string()
    .required("O complemento de seu endereço não foi preenchido")
    .max(200, "Tamanho máximo permitido"),
  cep: yup
    .string()
    .required("O cep do seu endereço não foi preenchido")
    .max(8, "Tamanho máximo permitido"),
});


export default function Cadastro() {
  let navigate = useNavigate();

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .post("http://localhost:8080/clientes/inserir", data)
      .then(() => {
        console.log("Cadastro realizado");
        navigate("/login");
      })
      .catch(() => console.error("Cadastro falhou"));


  return (
    <div >
      <Header />
      <main>
        <div className={styles.cardPost}>

          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>


            <Typography variant="h4" align="center">
            Cadastro
            </Typography>
            <hr />

            <Typography variant="h6">Dados para acesso</Typography>

              <div className={styles.inputsRow}>
            
                  <label htmlFor="email"></label>
                  <TextField fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                  
                  />
                  <p className={styles.errorMessage}>
                    {errors.descricao?.message}
                  </p>
            
                  <label htmlFor="senha"></label>
                  <TextField fullWidth
                    label="Senha"
                    variant="outlined"
                    type="password"
                    id="senha"
                    name="senha"
                    {...register("senha")}
                  />
                  <p className={styles.errorMessage}>
                    {errors.descricao?.message}
                  </p>
            
              </div>

              
          
              <Typography variant="h6">Dados Pessoais</Typography>
              
              <hr />
                
          
                <div className={styles.dadosPessoais}>
                
                  <label htmlFor="nome"></label>
                  <TextField fullWidth
                    label="Nome Completo"
                    variant="outlined"
                    type="text"
                    id="nome"
                    name="nome"
                    {...register("nome")}
                  />
                  <p className={styles.errorMessage}>{errors.titulo?.message}</p>
                
                
                
                  <div className={styles.inputsRow}>
                
                    <label htmlFor="cpf"></label>
                    <TextField fullWidth
                      label="CPF"
                      variant="outlined"
                      type="text"
                      id="cpf"
                      name="cpf"
                      {...register("cpf")}
                    />
                    <p className={styles.errorMessage}>
                      {errors.descricao?.message}
                    </p>
                    <p className={styles.errorMessage}>
                      {errors.descricao?.message}
                    </p>
                  
                    
                    <label htmlFor="telefone"></label>
                    <TextField fullWidth
                      label="Telefone"
                      variant="outlined"
                      type="tel"
                      id="telefone"
                      name="telefone"
                      {...register("telefone")}
                      />
                  <div/>

                </div>  
                
              </div>

              
              <Typography variant="h6">Endereço</Typography>

              <hr />
              

              <div className={styles.inputsRow}>
                
                  <label htmlFor="cep"></label>
                  <TextField fullWidth
                    label="CEP"
                    variant="outlined"
                    type="text"
                    id="cep"
                    name="cep"
                    {...register("cep")}
                  />
                
                  <p className={styles.errorMessage}>
                    {errors.descricao?.message}
                  </p>
                
                
                  <label htmlFor="complemento"></label>
                  <TextField fullWidth
                    label="Complemento"
                    variant="outlined"
                    cols={30}
                    rows={2}
                    type="text"
                    id="complemento"
                    name="complemento"
                    {...register("complemento")}
                  />
                
                  <p className={styles.errorMessage}>
                    {errors.conteudo?.message}
                  </p>
                
              </div>

              

              <div className={styles.button}>
                <Typography variant="body2" align="center"><button className={styles.enviarButton} type="submit">Criar Conta</button></Typography>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
