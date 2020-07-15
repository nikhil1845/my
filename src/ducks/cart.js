import { getProduct } from "../ducks/products";

// actions
const CART_ADD = "cart/ADD";
const CART_REMOVE = "cart/REMOVE";
const Selected_Product = "cart/SELETCT";

// reducer
const initialState = {
  items: [], // array of product ids
  currency: "INR",
  selectedItem: 1,
};

export default function cart(state = initialState, action = {}) {
  switch (action.type) {
    case CART_ADD:
      return handleCartAdd(state, action.payload);
    case CART_REMOVE:
      return handleCartRemove(state, action.payload);
    case Selected_Product:
      return handleSelected(state, action.payload);

    default:
      return state;
  }
}

function handleCartAdd(state, payload) {
  return {
    ...state,
    items: [...state.items, payload.productId],
  };
}

function handleCartRemove(state, payload) {
  return {
    ...state,
    items: state.items.filter((id) => id !== payload.productId),
  };
}

function handleSelected(state, payload) {
  console.log("handleselected122", payload.productId);
  console.log("handlestaetes", state.currency);
  console.log("handlestaetes777", state.selectedItem);

  console.log("items", state.items);

  return {
    ...state,
    selectedItem: payload.productId,
  };
}

// action creators
export function addToCart(productId) {
  return {
    type: CART_ADD,
    payload: {
      productId,
    },
  };
}

export function removeFromCart(productId) {
  return {
    type: CART_REMOVE,
    payload: {
      productId,
    },
  };
}

export function selectedProduct(productId) {
  console.log("selectedProduct", productId);
  return {
    type: Selected_Product,
    payload: {
      productId,
    },
  };
}

// selectors
export function isInCart(state, props) {
  return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
  return state.cart.items.map((id) => getProduct(state, { id }));
}

export function getSelectedItem(state, props) {
  console.log("getSelectedItem", state.cart.selectedItem);
  console.log("getitems", state.cart.items);

  return state.cart.selectedItem;
}

export function getCurrency(state, props) {
  return state.cart.currency;
}

export function getTotal(state, props) {
  return state.cart.items.reduce((acc, id) => {
    const item = getProduct(state, { id });
    return acc + item.price;
  }, 0);
}
