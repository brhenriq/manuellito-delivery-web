import React, { useState, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard";
import api from "../../services/api";

import { Container, Content } from "./styles";

interface IData {
  id: string;
  description: string;
  name: string;
  quantity: string;
  minimal_quantity: string;
  brand: string;
  price: string;
}

const ListProducts: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      handleProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function handleProducts() {
    const response = await api.get("/products");
    console.log(response);
    setData(response.data.products);
  }

  return (
    <Container>
      <div>
        <h1 className="newProductTitle">
          Relatório de Produtos em estoque
        </h1>
        <Link to="newProducts">
          <FiPlusCircle className="Plus" />
        </Link>
      </div>

      <Content>
        {data.map((item: IData) => (
          <>
            <ProductsCard
              id={item.id}
              key={item.id}
              tagColor={
                item.minimal_quantity >= item.quantity ? "#D93662" : "#8FEA78"
              }
              title={item.name}
              subtitle={item.brand}
              quantity={item.quantity}
            />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default ListProducts;
