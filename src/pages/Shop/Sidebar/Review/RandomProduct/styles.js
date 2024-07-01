import styled from "styled-components";

export const ReviewedProduct = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  img {
    width: 75px;
  }
  > div {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ReviewedPrice = styled.div`
  display: flex;
  gap: 10px;
  > div {
    text-decoration: line-through;
  }
`;
