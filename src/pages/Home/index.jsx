import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as styles from "./Home.module.css";

export default function Home() {
  return (
    <div clasName={styles.conteudo}>
      <Header/>
      <h1>Home</h1>
      
      <Footer />
    </div>
  )
}
