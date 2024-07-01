import styled from "styled-components";

export const Price = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 9px;
  align-items: center;
  > p {
    font-size: 20px;
    font-weight: 400;
  }
  > div {
    font-size: 16px;
    font-weight: 300;
    text-decoration: line-through;
  }
`;

export const Picture = styled.img`
  margin-bottom: 21px;
`;

export const Image = styled.img`
  position: absolute;
  margin-top: 25px;
  transform: translateX(280px);
  cursor: pointer;
`;

export const ButtonBuy = styled.button`
  margin-top: 15px;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.$inCart ? "#ff8e8e" : "#000"};
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    background-color: #ff8e8e;
  }
`;
