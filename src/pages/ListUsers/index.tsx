import React, { useState, useEffect } from "react";
import UsersCard from "../../components/UsersCard";
import api from "../../services/api";

import { Container, Content } from "./styles";

interface IData {
  id: string;
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

const ListUsers: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      handleProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function handleProducts() {
    const response = await api.get("/users");
    console.log(response);
    setData(response.data);
  }

  return (
    <Container>
      <div>
        <h1 className="newProductTitle">Relatório de Clientes</h1>
      </div>

      <Content>
        {data.map((item: IData) => (
          <>
            <UsersCard
              key={item.id}
              tagColor={"#8FEA78"}
              title={`${item.name} ${item.last_name}`}
              subtitle={item.email}
              total={item.phone_number}
            />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default ListUsers;
