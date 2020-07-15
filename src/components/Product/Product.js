import React, { Component } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Productdetails from "../Productdetails/Productdetails";
import history from "../../history";
import Model from "../UI/Model/Model";

class Product extends Component {
  handleClick = () => {
    const {
      id,
      addToCart,
      removeFromCart,
      selectedProduct,
      isInCart,
    } = this.props;
    console.log("Saved id=", id);
    selectedProduct(id);
    history.push("/Productdetails");
  };

  render() {
    const { name, price, currency, image, isInCart } = this.props;

    return (
      <div>
        <Model show={true} />

        <img src={image} alt="product" onClick={this.handleClick} />
        <div>
          <h3>{name}</h3>
          <div className="product__price">
            {price} {currency}
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  image: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  selectedProduct: PropTypes.func.isRequired,

  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
