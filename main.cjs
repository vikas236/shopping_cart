"use strict";
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const ReactDOM = require("react-dom/client");
const reactRouterDom = require("react-router-dom");
const PropTypes = require("prop-types");
const pexels = require("pexels");
function Home({ cartItems, setCartItems }) {
  const [data, setData] = React.useState("");
  const [query, setQuery] = React.useState("sleeping cats");
  const cart = [...cartItems];
  React.useEffect(() => {
    const client = pexels.createClient(
      "N3dqF65imJcBmwpebW5wgWt7hI1KlzDyQbZXGYXLMMxIxtt4yaSEAteR"
    );
    if (query !== "") {
      client.photos.search({ query, orientation: "square", per_page: 15 }).then((photos) => setData(photos.photos));
    }
  }, [query]);
  function AddToCart() {
    function add(e) {
      const image = e.target.parentElement.nextSibling.src;
      if (cart.indexOf(image) === -1)
        cart.unshift([image, price]);
    }
    const price = Math.floor(Math.random() * 10) + 1;
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs("h3", { children: [
        price,
        "B$"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("button", { className: "label_action", onClick: add, children: [
        "Add",
        /* @__PURE__ */ jsxRuntime.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" }) })
      ] })
    ] });
  }
  function Images({ data: data2 }) {
    let result = "";
    if (data2) {
      result = data2.map((l, i) => {
        const link = l.src.medium;
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "image",
            onMouseOver: (e) => handleHover(e, i),
            onMouseOut: (e) => handleHover(e, i),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "label", children: /* @__PURE__ */ jsxRuntime.jsx(AddToCart, {}) }),
              /* @__PURE__ */ jsxRuntime.jsx("img", { src: link, className: "photo", alt: "photo" }, link)
            ]
          },
          link
        );
      });
    }
    Images.propTypes = {
      data: PropTypes.array.isRequired
    };
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "container", children: result });
  }
  function handleSearch(e) {
    let query2 = "";
    if (e.target.innerText === "Search")
      query2 = e.target.previousSibling.value;
    else
      query2 = e.target.value;
    if (query2 !== "")
      setQuery(query2);
  }
  function handleHome() {
    setQuery("sleeping cats");
  }
  function handleHover(e, i) {
    const labels = document.querySelectorAll(".label");
    labels[i].classList.add("active");
  }
  const handleCart = () => setCartItems(cart);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "navbar", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "svg",
        {
          onClick: handleHome,
          className: "home",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16,8.41L11.5,3.91L4.41,11H6V12L6,19H9V13H14V19H17V11H18.59L17,9.41V6H16V8.41M2,12L11.5,2.5L15,6V5H18V9L21,12H18V20H13V14H10V20H5V12H2Z" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        {
          type: "text",
          onKeyDown: (e) => e.key === "Enter" ? handleSearch(e) : ""
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("button", { className: "search", onClick: handleSearch, children: "Search" }),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, { to: "cart", onClick: handleCart, children: /* @__PURE__ */ jsxRuntime.jsx(
        "svg",
        {
          className: "cart",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Images, { data })
  ] });
}
Home.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired
};
const App$1 = "";
function Cart({ cartItems, setCartItems }) {
  const navigate = reactRouterDom.useNavigate();
  function handleHover(e, i) {
    const labels = document.querySelectorAll(".label");
    labels[i].classList.add("active");
  }
  function handleRemove(e, i) {
    let arr = [...cartItems];
    arr = arr.filter((a) => a !== arr[i]);
    setCartItems([...arr]);
  }
  function itemDecrement(e) {
    const data = e.target.nextSibling;
    const num = parseInt(data.value);
    if (num > 0)
      data.value = num - 1;
  }
  function itemIncrement(e) {
    const data = e.target.previousSibling;
    const num = parseInt(data.value);
    data.value = num + 1;
  }
  function handleChange(e) {
    const num = parseInt(e.target.value);
    if (num > 100)
      e.target.value = 100;
  }
  function handleOrder(e) {
    console.log(e.target.innerText);
  }
  function Images({ data }) {
    let result = "";
    if (data.length > 0) {
      result = data.map((e, i) => {
        const link = e[0];
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "image",
            onMouseOver: (e2) => handleHover(e2, i),
            onMouseOut: (e2) => handleHover(e2, i),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "label", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("h3", { children: [
                  e[1],
                  "B$"
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "quantity", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("button", { className: "decrement", onClick: itemDecrement, children: "-" }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "input",
                    {
                      type: "text",
                      inputMode: "numeric",
                      defaultValue: "1",
                      onChange: (e2, i2) => handleChange(e2)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx("button", { className: "increment", onClick: itemIncrement, children: "+" })
                ] }),
                /* @__PURE__ */ jsxRuntime.jsxs(
                  "button",
                  {
                    className: "label_action",
                    onClick: (e2) => handleRemove(e2, i),
                    children: [
                      "Remove",
                      /* @__PURE__ */ jsxRuntime.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" }) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("img", { src: link, className: "photo", alt: "photo" }, link)
            ]
          },
          link
        );
      });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "cart_container column_flex", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "cart_box column_flex", children: [
        /* @__PURE__ */ jsxRuntime.jsx("h2", { children: "Cart is Empty" }),
        /* @__PURE__ */ jsxRuntime.jsx("button", { onClick: () => navigate(-1), children: "Go Back" })
      ] }) });
    }
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "cart_page", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "cart_nav", children: [
        /* @__PURE__ */ jsxRuntime.jsx("button", { className: "cart_to_home", onClick: () => navigate(-1), children: "Home" }),
        /* @__PURE__ */ jsxRuntime.jsx("button", { onClick: handleOrder, children: "Place Order" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "container", children: result }, "container")
    ] }, "cart_page");
  }
  Images.propTypes = {
    data: PropTypes.array.isRequired
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Images, { data: cartItems });
}
Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired
};
function App({ page }) {
  const [cartItems, setCartItems] = React.useState([]);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: page === 0 ? /* @__PURE__ */ jsxRuntime.jsx(Home, { cartItems, setCartItems }) : /* @__PURE__ */ jsxRuntime.jsx(Cart, { cartItems, setCartItems }) });
}
App.propTypes = {
  page: PropTypes.number.isRequired
};
const index = "";
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntime.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.HashRouter, { children: /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "/", element: /* @__PURE__ */ jsxRuntime.jsx(App, { page: 0 }) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "/cart", element: /* @__PURE__ */ jsxRuntime.jsx(App, { page: 1 }) })
  ] }) }) })
);
