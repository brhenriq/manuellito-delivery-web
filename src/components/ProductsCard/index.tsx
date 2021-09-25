import React from 'react';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Tag }  from './styles';

interface IProductsCardProps {
    id: string;
    tagColor: string;
    title: string;
    subtitle: string;
    quantity: string;
}

const ProductsCard: React.FC<IProductsCardProps> = ({
    id,
    tagColor,
    title,
    subtitle,
    quantity
}) => {

    async function deleteProduct() {
        await api.delete(`/products/${id}`);
    }

    return (
        <Container>
        <Tag color={tagColor} />
        <div>
            <span>{title}</span>
            <small>{subtitle}</small>
        </div>
        <h3>{quantity}</h3>
        <div>
            <FiTrash2 onClick={ deleteProduct } color="#D93662"/>
        </div>
        <div>
            <FiEdit3/>
        </div>
    </Container>
    )
};


export default ProductsCard;