import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("O título tem que ser preenchido")
    .max(40, "Tamanho máximo permitido"),
  descricao: yup
    .string()
    .required("A descrição tem que ser preenchida")
    .max(150, "Tamanho máximo permitido"),
  conteudo: yup
    .string()
    .required("O conteúdo tem que ser preenchido")
    .max(500, "Tamanho máximo permitido"),
});

export default function Posts() {
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
        navigate("/");
      })
      .catch(() => console.error("Cadastro falhou"));

  return (
    <div>
      <main>
        <div className={styles.cardPost}>
          <h1>Cadastre-se</h1>
          <hr />
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="titulo">Título</label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  {...register("titulo")}
                />
                <p className={styles.errorMessage}>{errors.titulo?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="descricao">Descrição</label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  {...register("descricao")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="conteudo">Conteúdo</label>
                <textarea
                  cols={30}
                  rows={10}
                  type="text"
                  id="conteudo"
                  name="conteudo"
                  {...register("conteudo")}
                />
                <p className={styles.errorMessage}>
                  {errors.conteudo?.message}
                </p>
              </div>
              <div className={styles.btnPost}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}