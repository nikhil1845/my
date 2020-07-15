import React, { Component } from "react";

import Cart from "./Cart";
import ProductList from "./ProductList";
class Productandcart extends Component {
  render() {
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
  }
}

export default Productandcart;
