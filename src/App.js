import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import Productdetails from "./components/Productdetails/Productdetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/">
            <div className="row">
              <div className="col-md-8">
                <ProductList />
              </div>
              <div className="col-md-4">
                <Cart />
              </div>
            </div>
          </Route>

          <Route path="/Productdetails" component={Productdetails} />
        </switch>
      </Router>
    </div>
  );
};

export default App;
