import { useState } from "react";
import PropTypes from "prop-types";
import Home from "./home";
import "./App.css";
import "./App_responsive.css";
import Cart from "./cart";

function App({ page }) {
  // items stored to share with cart page
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      {/* Load pages based on page number */}
      {page === 0 ? (
        <Home cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </>
  );
}

App.propTypes = {
  page: PropTypes.number.isRequired,
};

export default App;
