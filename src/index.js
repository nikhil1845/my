import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import App from "./App";
import productsData from "./data/products";
import "bootstrap/dist/css/bootstrap.css";
//import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Productdetails from "./components/Productdetails/Productdetails";

import { Router, Route, Link } from "react-router-dom";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

let store = createStore(
  rootReducer,
  {
    products: productsData, // initial store values
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/Productdetails">Details</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Route path="/Productdetails" component={Productdetails} />
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
