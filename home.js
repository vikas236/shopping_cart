"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _pexels = require("pexels");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Home page
function Home(_ref) {
  var cartItems = _ref.cartItems,
    setCartItems = _ref.setCartItems;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)("sleeping cats"),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var cart = _toConsumableArray(cartItems);

  // fetch images for home and search
  (0, _react.useEffect)(function () {
    var client = (0, _pexels.createClient)("N3dqF65imJcBmwpebW5wgWt7hI1KlzDyQbZXGYXLMMxIxtt4yaSEAteR");
    if (query !== "") {
      client.photos.search({
        query: query,
        orientation: "square",
        per_page: 15
      }).then(function (photos) {
        return setData(photos.photos);
      });
    }
  }, [query]);

  // add item to cart array
  function AddToCart() {
    function add(e) {
      var image = e.target.parentElement.nextSibling.src;
      if (cart.indexOf(image) === -1) cart.unshift([image, price]);
    }
    var price = Math.floor(Math.random() * 10) + 1;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, price, "B$"), /*#__PURE__*/React.createElement("button", {
      className: "label_action",
      onClick: add
    }, "Add", /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 22 22"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z"
    }))));
  }

  // Images container
  function Images(_ref2) {
    var data = _ref2.data;
    var result = "";
    if (data) {
      result = data.map(function (l, i) {
        var link = l.src.medium;
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
        }, /*#__PURE__*/React.createElement(AddToCart, null)), /*#__PURE__*/React.createElement("img", {
          key: link,
          src: link,
          className: "photo",
          alt: "photo"
        }));
      });
    }
    Images.propTypes = {
      data: _propTypes["default"].array.isRequired
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, result);
  }

  // Search function
  function handleSearch(e) {
    var query = "";
    if (e.target.innerText === "Search") query = e.target.previousSibling.value;else query = e.target.value;
    if (query !== "") setQuery(query);
  }

  // Load home page
  function handleHome() {
    setQuery("sleeping cats");
  }

  // Show price and addcart button on image hover
  function handleHover(e, i) {
    var labels = document.querySelectorAll(".label");
    labels[i].classList.add("active");
  }

  // Setcartitems for cart page
  var handleCart = function handleCart() {
    return setCartItems(cart);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("svg", {
    onClick: handleHome,
    className: "home",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16,8.41L11.5,3.91L4.41,11H6V12L6,19H9V13H14V19H17V11H18.59L17,9.41V6H16V8.41M2,12L11.5,2.5L15,6V5H18V9L21,12H18V20H13V14H10V20H5V12H2Z"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" ? handleSearch(e) : "";
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "search",
    onClick: handleSearch
  }, "Search"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "cart",
    onClick: handleCart
  }, /*#__PURE__*/React.createElement("svg", {
    className: "cart",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 14V16H6V15H5V11H4V8H3V3H1V1H5V4H21V8H20V11H19V12H7V14H19M5 7H6V10H18V7H19V6H5V7M7 17H9V18H10V20H9V21H7V20H6V18H7V17M15 17H17V18H18V20H17V21H15V20H14V18H15V17Z"
  })))), /*#__PURE__*/React.createElement(Images, {
    data: data
  }));
}
Home.propTypes = {
  cartItems: _propTypes["default"].array.isRequired,
  setCartItems: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = Home;