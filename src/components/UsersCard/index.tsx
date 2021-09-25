import React from "react";
import { Container, Tag } from "./styles";

interface IOrdersCardProps {
  tagColor: string;
  title: string;
  subtitle: string;
  total: string;
}

const OrdersCard: React.FC<IOrdersCardProps> = ({
  tagColor,
  title,
  subtitle,
  total,
}) => {

  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{total}</h3>
    </Container>
  );
};

export default OrdersCard;
