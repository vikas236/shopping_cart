"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _home = _interopRequireDefault(require("./home"));
require("./App.css");
var _cart = _interopRequireDefault(require("./cart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function App(_ref) {
  var page = _ref.page;
  // items stored to share with cart page
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cartItems = _useState2[0],
    setCartItems = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, page === 0 ? /*#__PURE__*/React.createElement(_home["default"], {
    cartItems: cartItems,
    setCartItems: setCartItems
  }) : /*#__PURE__*/React.createElement(_cart["default"], {
    cartItems: cartItems,
    setCartItems: setCartItems
  }));
}
App.propTypes = {
  page: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = App;