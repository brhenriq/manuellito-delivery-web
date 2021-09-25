import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";
import "./styles.css";

const NewCategory: React.FC = () => {
  const [name, setName] = useState('');
  const [img_url, setImgUrl] = useState('');

  const history = useHistory();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await api.post(`/categories`, {
      name,
      img_url
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
      <h1 className="newProductTitle">Nova Categoria</h1>
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
          <label>URL da Imagem</label>
          <input
            type="text"
            placeholder="https://"
            value={img_url}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="newProductButton">Criar</button>
          
      </form>
    </>
  )};

export default NewCategory;