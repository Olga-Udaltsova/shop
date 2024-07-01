import styled from "styled-components";

export const Order = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
  > img {
    width: 150px;
  }
`;

export const OrderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  > p {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const PricesAndPosition = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Position = styled.div`
  display: flex;
  > button {
    padding: 10px;
    background-color: #f0f0f0;
    font-size: 15px;
    cursor: pointer;
    border: none;
  }
  > p {
    padding: 10px;
    background-color: #f0f0f0;
    font-size: 15px;
  }
`;

export const Prices = styled.div`
  display: flex;
  gap: 10px;
`;

export const OldPrice = styled.div`
  font-size: 16px;
  font-weight: 300;
  text-decoration: line-through;
`;

export const ButtonDelete = styled.button`
  padding: 8px 10px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export const Summa = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  margin-left: 350px;
  > p {
    font-size: 20px;
    font-weight: 400;
  }
`;
