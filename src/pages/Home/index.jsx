import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as styles from "./Home.module.css";

export default function Home() {
  const nomeUsuario = localStorage.getItem("nomeUsuario");
  return (
    <div clasName={styles.conteudo}>
      <Header/>
      {nomeUsuario && (
        <div className={styles.welcomeMessage}>
          <h1>Olá, {nomeUsuario}!</h1>
          <p>Bem-vindo de volta ao sistema.</p>
        </div>
      )}
      <Footer />
    </div>
  )
}
