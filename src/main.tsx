import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";
import { TableFetcher } from "./TableFetcher";
import { UserGenerator } from "./UserGenerator";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="user">
          <Route index element={<TableFetcher />} />
          <Route path="generator" element={<UserGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
