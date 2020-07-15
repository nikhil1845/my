import { connect } from "react-redux";
import Product from "../components/Product";
import {
  addToCart,
  removeFromCart,
  selectedProduct,
  isInCart,
} from "../ducks/cart";

const mapStateToProps = (state, props) => {
  return {
    isInCart: isInCart(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  selectedProduct: (id) => dispatch(selectedProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
