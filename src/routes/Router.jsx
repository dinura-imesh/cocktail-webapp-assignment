import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.component()} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
