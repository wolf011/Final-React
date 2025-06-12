import CadastroCliente from "../../components/CRUD/Clientes";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Cadastro() {
  return (
    <div>
      <Header />
      <h1>Cadastro</h1>
      <CadastroCliente/>
      <Footer />
    </div>
  )
}
