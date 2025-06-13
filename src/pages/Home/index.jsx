import GetProdutos from "../../components/CRUD/Produtos";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Home.module.css"

export default function Home () {
  return (
    <div>
      <Header/>
          <h1>Home</h1>
          <GetProdutos/>
      <Footer/>
    </div>
  )
}
