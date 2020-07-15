import React from "react";
import Cart from "./containers/Cart";
import Productandcart from "./containers/Productandcart";

import ProductList from "./containers/ProductList";
import Productdetails from "./components/Productdetails/Productdetails";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <ProductList />
      </div>
      <div className="col-md-4">
        <Cart />
      </div>
    </div>
  );
};

export default App;
