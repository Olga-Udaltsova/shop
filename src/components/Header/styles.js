import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-end;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #ff8e8e;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 40px;
  cursor: pointer;
`;

export const FavoriteAndCart = styled.div`
  display: flex;
  gap: 5px;
  > div {
    display: flex;
    width: 20px;
    height: 20px;
    background-color: #000;
    border: none;
    border-radius: 15px;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
`;
