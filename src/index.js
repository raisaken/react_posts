import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Register from "./pages/register";
import Login from "./pages/login";
import Logout from "./pages/logout";
// import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

const routing = (
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      {/* <Footer /> */}
    </React.StrictMode>
  </BrowserRouter>
);

root.render(routing);
