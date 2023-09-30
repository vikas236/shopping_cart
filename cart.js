"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRouterDom = require("react-router-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Cart page
function Cart(_ref) {
  var cartItems = _ref.cartItems,
    setCartItems = _ref.setCartItems;
  var navigate = (0, _reactRouterDom.useNavigate)();

  // Show quantity and price on image hover
  function handleHover(e, i) {
    var labels = document.querySelectorAll(".label");
    labels[i].classList.add("active");
  }

  // Remove image
  function handleRemove(e, i) {
    var arr = _toConsumableArray(cartItems);
    arr = arr.filter(function (a) {
      return a !== arr[i];
    });
    setCartItems(_toConsumableArray(arr));
  }

  // Decrease item quantity
  function itemDecrement(e) {
    var data = e.target.nextSibling;
    var num = parseInt(data.value);
    if (num > 0) data.value = num - 1;
  }

  // Increase item quantity
  function itemIncrement(e) {
    var data = e.target.previousSibling;
    var num = parseInt(data.value);
    data.value = num + 1;
  }

  // set max item quantity to 100
  function handleChange(e) {
    var num = parseInt(e.target.value);
    if (num > 100) e.target.value = 100;
  }

  // place order function
  function handleOrder(e) {
    console.log(e.target.innerText);
  }

  // Cart items
  function Images(_ref2) {
    var data = _ref2.data;
    var result = "";
    if (data.length > 0) {
      result = data.map(function (e, i) {
        var link = e[0];
        return /*#__PURE__*/React.createElement("div", {
          key: link,
          className: "image",
          onMouseOver: function onMouseOver(e) {
            return handleHover(e, i);
          },
          onMouseOut: function onMouseOut(e) {
            return handleHover(e, i);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "label"
        }, /*#__PURE__*/React.createElement("h3", null, e[1], "B$"), /*#__PURE__*/React.createElement("div", {
          className: "quantity"
        }, /*#__PURE__*/React.createElement("button", {
          className: "decrement",
          onClick: itemDecrement
        }, "-"), /*#__PURE__*/React.createElement("input", {
          type: "text",
          inputMode: "numeric",
          defaultValue: "1",
          onChange: function onChange(e, i) {
            return handleChange(e, i);
          }
        }), /*#__PURE__*/React.createElement("button", {
          className: "increment",
          onClick: itemIncrement
        }, "+")), /*#__PURE__*/React.createElement("button", {
          className: "label_action",
          onClick: function onClick(e) {
            return handleRemove(e, i);
          }
        }, "Remove", /*#__PURE__*/React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z"
        })))), /*#__PURE__*/React.createElement("img", {
          key: link,
          src: link,
          className: "photo",
          alt: "photo"
        }));
      });
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "cart_container column_flex"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cart_box column_flex"
      }, /*#__PURE__*/React.createElement("h2", null, "Cart is Empty"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return navigate(-1);
        }
      }, "Go Back")));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "cart_page",
      key: "cart_page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cart_nav"
    }, /*#__PURE__*/React.createElement("button", {
      className: "cart_to_home",
      onClick: function onClick() {
        return navigate(-1);
      }
    }, "Home"), /*#__PURE__*/React.createElement("button", {
      onClick: handleOrder
    }, "Place Order")), /*#__PURE__*/React.createElement("div", {
      className: "container",
      key: "container"
    }, result));
  }
  Images.propTypes = {
    data: _propTypes["default"].array.isRequired
  };
  return /*#__PURE__*/React.createElement(Images, {
    data: cartItems
  });
}
Cart.propTypes = {
  cartItems: _propTypes["default"].array.isRequired,
  setCartItems: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = Cart;