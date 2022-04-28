import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import { Login } from "./pages/login";
import Logout from "./pages/logout";
import Singlepost from "./pages/singlepost";
import ProvinceMapNepal from "./pages/ProvinceMap";

const root = createRoot(document.getElementById("root"));

const routing = (
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/post" element={<Singlepost />} />
        <Route path="/post/:slug" element={<Singlepost />} />
        <Route path="/province" element={<ProvinceMapNepal />} />
      </Routes>
      {/* <Footer /> */}
    </React.StrictMode>
  </BrowserRouter>
  //  </UserContext>
);

root.render(routing);
