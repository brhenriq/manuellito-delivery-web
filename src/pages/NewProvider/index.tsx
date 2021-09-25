import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";
import "./styles.css";

const NewProvider: React.FC = () => {
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await api.post(`/providers`, {
      name,
      last_name,
      cpf,
      password
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/home');
    }).catch((err) => {
      alert('Erro ao realizar o cadastro');
      console.log(err)
    });
  }

  return ( 
    <>
      
      <div className="newProduct">
        <h1 className="newProductTitle">Novo Funcionário</h1>
          <form className="newProductForm" onSubmit={handleSubmit}>
            
          <div className="newProductItem">
            <label>Nome</label>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>Sobrenome</label>
              <input
                type="text"
                placeholder="Sobrenome"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>CPF</label>
              <input
                type="text"
                placeholder="999.999.999-99"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>Senha</label>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button type="submit" className="newProductButton">Criar</button>
            
        </form>
      </div>
    </>
  )};

export default NewProvider;