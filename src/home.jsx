import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Home page
function Home({ cartItems, setCartItems }) {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("sleeping cats");
  const cart = [...cartItems];

  // fetch images for home and search
  useEffect(() => {
    fetch(
      `https://api.pexels.com/v1/search?query=${query}+&orientation=square`,
      {
        headers: {
          Authorization:
            "N3dqF65imJcBmwpebW5wgWt7hI1KlzDyQbZXGYXLMMxIxtt4yaSEAteR",
        },
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setData(resp.photos);
      });
  }, [query]);

  // add item to cart array
  function AddToCart() {
    function add(e) {
      const image = e.target.parentElement.nextSibling.childNodes[0].src;
      let cartImgs = [];

      if (cart.length > 0) cartImgs = cart.map((e) => e[0]);

      if (cartImgs.length === 0 || cartImgs.indexOf(image) === -1) {
        cart.unshift([image, price]);
        e.target.innerHTML = `Added
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
          <path d="M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" />
        </svg>`;
      }
    }

    const price = Math.floor(Math.random() * 10) + 1;

    return (
      <>
        <h3>{price}B$</h3>
        <button className="label_action" onClick={add}>
          Add
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <path d="M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" />
          </svg>
        </button>
      </>
    );
  }

  // Images container
  function Images({ data }) {
    let result = "";
    if (data) {
      result = data.map((l, i) => {
        const thumbnail = l.src.medium;
        const original = l.src.original;
        return (
          <div
            key={thumbnail}
            className="image"
            onMouseOver={(e) => handleHover(e, i)}
            onMouseOut={(e) => handleHover(e, i)}
          >
            <div className="label">
              <AddToCart />
            </div>
            <a
              className="original_image"
              href={original}
              rel="noreferrer"
              target="_blank"
            >
              <img
                key={thumbnail}
                src={thumbnail}
                className="photo"
                alt="photo"
              />
            </a>
          </div>
        );
      });
    }

    Images.propTypes = {
      data: PropTypes.array.isRequired,
    };

    return <div className="container">{result}</div>;
  }

  // Search function
  function handleSearch(e) {
    let query = "";
    if (e.target.innerText === "Search") query = e.target.previousSibling.value;
    else query = e.target.value;

    if (query !== "") setQuery(query);
  }

  // Load home page
  function handleHome() {
    setQuery("sleeping cats");
  }

  // Show price and addcart button on image hover
  function handleHover(e, i) {
    const labels = document.querySelectorAll(".label");
    labels[i].classList.add("active");
  }

  // Setcartitems for cart page
  const handleCart = () => setCartItems(cart);

  return (
    <>
      <div className="navbar">
        <svg
          onClick={handleHome}
          className="home"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16,8.41L11.5,3.91L4.41,11H6V12L6,19H9V13H14V19H17V11H18.59L17,9.41V6H16V8.41M2,12L11.5,2.5L15,6V5H18V9L21,12H18V20H13V14H10V20H5V12H2Z" />
        </svg>
        <input
          type="text"
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch(e) : "")}
        />
        <svg
          className="search"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M9.5,4C13.09,4 16,6.91 16,10.5C16,12.12 15.41,13.6 14.43,14.73L20.08,20.38L19.37,21.09L13.72,15.44C12.59,16.41 11.11,17 9.5,17C5.91,17 3,14.09 3,10.5C3,6.91 5.91,4 9.5,4M9.5,5C6.46,5 4,7.46 4,10.5C4,13.54 6.46,16 9.5,16C12.54,16 15,13.54 15,10.5C15,7.46 12.54,5 9.5,5Z" />
        </svg>
        <Link to="cart" onClick={handleCart}>
          <svg
            onClick={handleCart}
            className="cart"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
          >
            <path d="M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" />
          </svg>
        </Link>
      </div>
      <Images data={data} />
    </>
  );
}

Home.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Home;
