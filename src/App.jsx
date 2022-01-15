import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Convert } from "./components/Convert";
import { List } from "./components/List";
import { ListPhone } from "./components/ListPhone";
// import { Navbar } from "./components/Navbar";
import { Navbar } from "./components/NavbarC";
import { Context } from "./context/context.jsx";

export const App = () => {
  const { buttonClick, handleChange, phones } = useContext(Context);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Convert
              buttonClick={buttonClick}
              handleChange={handleChange}
              phones={phones}
            />
          }
        />
        <Route path="/list" element={<List phones={phones} />} />
        <Route
          path="listphone"
          element={<ListPhone path="listphone" phones={phones} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
