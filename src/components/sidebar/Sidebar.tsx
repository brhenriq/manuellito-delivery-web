import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">Home</li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Cadastro</h3>
          <ul className="sidebarList">
            <Link to="newProducts" className="link">
              <li className="sidebarListItem">Produtos</li>
            </Link>

            <Link to="newProvider" className="link">
              <li className="sidebarListItem">Funcionário</li>
            </Link>

            <Link to="newCategory" className="link">
              <li className="sidebarListItem">Categoria</li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Relatórios</h3>
          <ul className="sidebarList">
            <Link to="products" className="link">
              <li className="sidebarListItem">Produtos</li>
            </Link>

            <Link to="users" className="link">
              <li className="sidebarListItem">Clientes</li>
            </Link>

            <Link to="orders" className="link">
              <li className="sidebarListItem">Pedidos</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}