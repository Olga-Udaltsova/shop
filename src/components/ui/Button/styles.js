import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: #000;
  font-size: 16px;
  color: #fff;
  padding: 17px;
  cursor: pointer;

  &:hover {
    background-color: #ff8e8e;
  }

  &.apply {
    padding: 17px 74.5px;
    margin-top: 50px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
