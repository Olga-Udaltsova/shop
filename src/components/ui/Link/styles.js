import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  color: #000;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  &:hover {
    color: #ff8e8e;
  }
  &.btnHome {
    border-left: 2px solid #000;
    padding-left: 15px;
  }
`;
