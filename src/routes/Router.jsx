import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.component()} key={index} />
      ))}
    </Routes>
  );
};
