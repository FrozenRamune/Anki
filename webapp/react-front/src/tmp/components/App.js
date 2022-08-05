import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app/dashboard" />} />
        <Route
          path="/app"
          element={<Navigate to="/app/dashboard" />}
        />
        <Route path="/app/*" element={<Layout />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/*" element={Error} />
      </Routes>
    </HashRouter>
  );

}
