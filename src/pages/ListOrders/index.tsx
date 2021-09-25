import React, { useState, useEffect } from "react";
import OrdersCard from "../../components/OrdersCard";
import api from "../../services/api";

import { Container, Content } from "./styles";

interface IData {
  id: string;
  total: string;
  status: string;
}

const ListOrders: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      handleProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function handleProducts() {
    const response = await api.get("/orders");
    console.log(response);
    setData(response.data);
  }

  return (
    <Container>
      <div>
        <h1 className="newProductTitle">Relatório de Pedidos</h1>
      </div>

      <Content>
        {data.map((item: IData) => (
          <>
            <OrdersCard
              id={item.id}
              key={item.id}
              tagColor={
                item.status.toString() === "Entregue"
                  ? "#8FEA78"
                  : item.status.toString() === "Confirmado" ||
                    item.status.toString() === "Em Rota"
                  ? "#F2D338"
                  : "#D93662"
              }
              title={item.id}
              subtitle={item.status}
              total={item.total}
            />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default ListOrders;
