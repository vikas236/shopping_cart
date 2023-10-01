import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

const basename = "/shopping_cart"; // Set your base URL here

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<App page={0} />} />
        <Route path="/cart" element={<App page={1} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
