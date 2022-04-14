import React, { useState, useEffect } from "react";
import api from "../config/api";
import { useNavigate } from "react-router-dom";

// 1:24:00
export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const response = api.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    api.defaults.headers["Authorization"] = null;
    navigate("/login");
  });
  return <div>Logout</div>;
}
