import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as styles from "./Cadastro.module.css";


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
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <h1>Cadastro</h1>
          <hr />
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="nome">Nome</label>
                  <input
                  type="text"
                  id="nome"
                  name="nome"
                  {...register("nome")}
                />
                <p className={styles.errorMessage}>{errors.titulo?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  {...register("telefone")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  {...register("cpf")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  {...register("cep")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="complemento">Complemento</label>
                <input
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

              <div className={styles.fields}>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  {...register("senha")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>

              <div className={styles.btnPost}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
