import styled from "styled-components";

export const YourCart = styled.div`
  height: 100%;
  border: 1px solid #f0f0f0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 2px solid #000;
`;

export const Cost = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  > span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

