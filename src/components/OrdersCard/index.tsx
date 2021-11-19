import React from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';

import { Container, Tag }  from './styles';

interface IOrdersCardProps {
    id: string;
    tagColor: string;
    title: string;
    subtitle: string;
    total: string;
}

const OrdersCard: React.FC<IOrdersCardProps> = ({
    id,
    tagColor,
    title,
    subtitle,
    total
}) => {

  const history = useHistory();


    async function alterStatus(status: string) {
        await api.patch(`/orders/status/${id}`, {
          status
        }).then(() => {
          alert('Alteração de status realizado com sucesso!');
          history.push('/home');
        });
    }

    return (
      <Container>
        <Tag color={tagColor} />
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <h3>R$ {total}</h3>
        <div>
          <select
            className="newProductSelect"
            name="active"
            id="active"
            onChange={(e) => alterStatus(e.target.value)}
          >
            <option value="Confirmado">Escolha um status</option>
            <option value="Confirmado">Confirmado</option>
            <option value="Em Rota">Em Rota</option>
            <option value="Entregue">Entregue</option>
          </select>
        </div>
      </Container>
    );
};


export default OrdersCard;