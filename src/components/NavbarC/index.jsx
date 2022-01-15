import React from "react";
import { NavLink } from "./NavbarElements";

export const Navbar = () => {
  return (
    <>
      {/* <div className="nav"> */}
      {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/list" activeStyle>
          About
        </NavLink>
        <NavLink to="/listphone" activeStyle>
          Contact Us
        </NavLink> */}
      <ul className="nav">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/list">List</NavLink>
        </li>

        <li>
          <NavLink to="/listphone">ListPhones</NavLink>
        </li>
      </ul>
      {/* </div> */}
    </>
  );
};
