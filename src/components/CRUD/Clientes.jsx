import axios from "axios"
import { useState } from "react";

export default function CadastroCliente() {
    // const [cliente, setCliente] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cep, setCep] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            nome: nome,
            telefone: telefone,
            email: email,
            cpf: cpf,
            senha: senha,
            complemento: complemento,
            cep: cep
        }

        axios.post("http://localhost:8080/clientes/inserir", newPost)
            .then(() => console.log("Cliente cadastrado com sucesso!"))
            .catch(() => console.error("Erro ao inserir cliente"));
    }

    return (
        <div className="container">
            <h2>Cadastre-se</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" id="nome" className="my-3 form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="telefone">Telefone: </label>
                        <input type="tel" id="telefone" className="my-3 form-control" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" className="my-3 form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email">Cpf: </label>
                        <input type="text" id="cpf" className="my-3 form-control" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cep">CEP: </label>
                        <input type="text" id="cep" className="my-3 form-control" value={cep} onChange={(e) => setCep(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="complemento">Complemento: </label>
                        <input type="text" id="complemento" className="my-3 form-control" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="senha">Senha: </label>
                        <input type="password" id="senha" className="my-3 form-control" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>

    )
}
