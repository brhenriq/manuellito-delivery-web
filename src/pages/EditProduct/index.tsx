import React, { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";
import "./styles.css";

interface category {
  id: string;
  name: string;
}

const EditProduct: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const id = localStorage.getItem('id_Product');

  useEffect(() => {
    console.log(id);
    try {
      getProduct(id || '');
      handleCategories();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  async function getProduct(id: string) {
    const res = await api.get(`/products/${id}`);
    console.log(res.data)

    setName(res.data.name);
    setBrand(res.data.brand)
    setDescription(res.data.description)
    setPrice(res.data.price)
    setCategory(res.data.category.id)
    setQuantity(res.data.quantity)
    setMinimal_quantity(res.data.minimal_quantity)
    setImgUrl(res.data.img_url)
  }

  async function handleCategories() {
    const response = await api.get('/categories');
    setCategories(response.data);
  }

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category_id, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [minimal_quantity, setMinimal_quantity] = useState('');
  const [img_url, setImgUrl] = useState('');


  const history = useHistory();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(name, brand, description, price, category_id, quantity, minimal_quantity);

    await api.put(`/products/${id}`, {name, description, brand, price, quantity, minimal_quantity, category_id, img_url}).then(() => {
      alert('Produto alterado com sucesso!');
      history.push('/home');
    }).catch((err) => {
      alert('Erro ao realizar alteração');
      console.log(err)
    });
  }

  return ( 
    <>
      <h1 className="newProductTitle">Editar Produto "{ name }"</h1>
          <form className="newProductForm" onSubmit={handleSubmit}>
            
          <div className="newProductItem">
            <label>Nome</label>
              <input
                type="text"
                placeholder="Pote 2L"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>Descrição</label>
              <input
                type="text"
                placeholder="Sorvete de massa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>Marca</label>
              <input
                type="text"
                placeholder="Kibon"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>Preço R$</label>
              <input
                type="text"
                placeholder="12,35"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
          </div>
          
            <div className="newProductItem">
            <label>Quantidade em estoque</label>
              <input
                type="number"
                placeholder="Quantidade atual"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>Quantidade Minima</label>
              <input
                type="number"
                value={minimal_quantity}
                onChange={(e) => setMinimal_quantity(e.target.value)}
              />
            </div>
            
          <div className="newProductItem">
            <label>Categoria</label>
              <select className="newProductSelect" name="active" id="active" onChange={(e) => setCategory(e.target.value)}>
                <option value="">Escolha uma opção</option>
                {categories.map((category: category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
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

          <button type="submit" className="newProductButton">Salvar</button>
            
        </form>
    </>
  )};

export default EditProduct;