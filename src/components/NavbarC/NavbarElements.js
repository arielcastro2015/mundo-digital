import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #0070f3;
  }

  &.active {
    color: #0070f3;
  }
`;
