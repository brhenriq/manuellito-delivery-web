import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import NewProducts from "../pages/NewProducts";
import NewProvider from "../pages/NewProvider";
import NewCategory from "../pages/NewCategory";
import Layout from "../components/Layout";
import ListProducts from "../pages/ListProducts";
import ListOrders from "../pages/ListOrders";
import ListUsers from "../pages/ListUsers";

const Routes: React.FC = () => (
  <>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newProducts" component={NewProducts} />
        <Route path="/newProvider" component={NewProvider} />
        <Route path="/newCategory" component={NewCategory} />
        <Route path="/products" component={ListProducts} />
        <Route path="/orders" component={ListOrders} />
        <Route path="/users" component={ListUsers} />
      </Switch>
    </ Layout>  
  </>
)

export default Routes;