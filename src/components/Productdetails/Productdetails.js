import React, { Component } from "react";
import PropTypes from "prop-types";
import { getProducts } from "../../ducks/products";
import { getProduct } from "../../ducks/products";

import {
  getItems,
  addToCart,
  getSelectedItem,
  getCurrency,
  getTotal,
  removeFromCart,
} from "../../ducks/cart";
import { connect } from "react-redux";

class Productdetails extends Component {
  constructor(props) {
    super(props);
    const items = this.props.items;
    console.log("all props", items);
    console.log("selectedite", this.props.selectedItem);
  }

  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props.selectedItem;
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  //   currency: "INR"
  // id: 1
  // image: "images/1.jpg"
  // name: "Onida"
  // price: 99.99
  render() {
    let {
      name,
      price,
      currency,
      image,
      id,
      isInCart,
    } = this.props.selectedItem;

    console.log("details id", this.props.selectedItem.id);
    const items = this.props.products;

    if (items !== undefined) {
      const selectedItem = items[this.props.selectedItem];
      if (selectedItem !== undefined) {
        name = selectedItem.name;
        id = selectedItem.id;
        currency = selectedItem.currency;
        image = selectedItem.image;
        price = selectedItem.price;

        console.log("Name", image);
      }
    } else {
    }

    return (
      <div>
        <h1>Product Details {this.props.id}</h1>

        <img src={image} alt="product" />
        <div>
          <h3>{name}</h3>
          <div className="product__price">
            {price} {currency}
          </div>
          <div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div className="product__button-wrap">
            <button
              className={isInCart ? "btn btn-danger" : "btn btn-primary"}
              onClick={this.handleClick}
            >
              {isInCart ? "Remove" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    items: getItems(state, props),
    currency: getCurrency(state, props),
    total: getTotal(state, props),
    selectedItem: getSelectedItem(state, props),
  };
};
const mapStateToProps1 = (state, props) => {
  props.id = 1;
  return {
    selectedItem: getProduct(state, props),
    products: getProducts(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  addToCart: (id) => dispatch(addToCart(id)),
});
//export default Productdetails;

export default connect(mapStateToProps1, mapDispatchToProps)(Productdetails);
