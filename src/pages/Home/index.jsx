import { useEffect, useState } from "react";
import axios from "axios";
import ScrollCarousel from "scroll-carousel-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as styles from "./Home.module.css";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  // Carrega os produtos da API ao montar o componente
  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const resposta = await axios.get("http://localhost:8080/produtos/listar");
        setProdutos(resposta.data);
      } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
      }
    };

    buscarProdutos();
  }, []);

  return (
    <>
     <Header />
    <div className={styles.conteudo}>
      <h1 className="text-xl font-semibold mb-4">Bem-vindo ao Catálogo</h1>

      <ScrollCarousel
        autoplay
        autoplaySpeed={7}
        speed={6}
        onReady={() => console.log("Carrossel carregado com sucesso")}
      >
        {produtos.map((item) => (
          <div
            key={item.id}
            className="w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 p-2"
          >
            <img
              src={item.url}
              alt={item.nome}
              loading="lazy"
              className="rounded shadow-md w-full h-full object-cover"
            />
          </div>
        ))}
      </ScrollCarousel>
    </div>

      <Footer />
    </>
  );
}
