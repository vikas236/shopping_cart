"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _reactRouterDom = require("react-router-dom");
var _App = _interopRequireDefault(require("./App.jsx"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_client["default"].createRoot(document.getElementById("root")).render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
  path: "/",
  element: /*#__PURE__*/_react["default"].createElement(_App["default"], {
    page: 0
  })
}), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
  path: "/cart",
  element: /*#__PURE__*/_react["default"].createElement(_App["default"], {
    page: 1
  })
})))));