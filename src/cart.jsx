import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Cart page
function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // Show quantity and price on image hover
  function handleHover(e, i) {
    const labels = document.querySelectorAll(".label");
    labels[i].classList.add("active");
  }

  // Remove image
  function handleRemove(e, i) {
    let arr = [...cartItems];
    arr = arr.filter((a) => a !== arr[i]);
    setCartItems([...arr]);
  }

  // Decrease item quantity
  function itemDecrement(e) {
    const data = e.target.nextSibling;
    const num = parseInt(data.value);
    if (num > 0) data.value = num - 1;
  }

  // Increase item quantity
  function itemIncrement(e) {
    const data = e.target.previousSibling;
    const num = parseInt(data.value);
    data.value = num + 1;
  }

  // set max item quantity to 100
  function handleChange(e) {
    const num = parseInt(e.target.value);
    if (num > 100) e.target.value = 100;
  }

  // place order function
  function handleOrder(e) {
    console.log(e.target.innerText);
  }

  // Cart items
  function Images({ data }) {
    let result = "";
    if (data.length > 0) {
      result = data.map((e, i) => {
        const link = e[0];
        return (
          <div
            key={link}
            className="image"
            onMouseOver={(e) => handleHover(e, i)}
            onMouseOut={(e) => handleHover(e, i)}
          >
            <div className="label">
              <h3>{e[1]}B$</h3>
              <div className="quantity">
                <button className="decrement" onClick={itemDecrement}>
                  -
                </button>
                <input
                  type="text"
                  inputMode="numeric"
                  defaultValue="1"
                  onChange={(e, i) => handleChange(e, i)}
                ></input>
                <button className="increment" onClick={itemIncrement}>
                  +
                </button>
              </div>
              <button
                className="label_action"
                onClick={(e) => handleRemove(e, i)}
              >
                Remove
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" />
                </svg>
              </button>
            </div>
            <img key={link} src={link} className="photo" alt="photo" />
          </div>
        );
      });
    } else {
      return (
        <div className="cart_container column_flex">
          <div className="cart_box column_flex">
            <h2>Cart is Empty</h2>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      );
    }

    return (
      <div className="cart_page" key="cart_page">
        <div className="cart_nav">
          <button className="cart_to_home" onClick={() => navigate(-1)}>
            Home
          </button>
          <button onClick={handleOrder}>Place Order</button>
        </div>
        <div className="container" key="container">
          {result}
        </div>
      </div>
    );
  }

  Images.propTypes = {
    data: PropTypes.array.isRequired,
  };

  return <Images data={cartItems} />;
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Cart;
