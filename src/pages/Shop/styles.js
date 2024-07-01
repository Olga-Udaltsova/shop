import styled from "styled-components";

export const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 50px auto;
  position: relative;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  gap: 30px;
  margin: 50px auto;
`;

export const QuantityAndSort = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Clothes = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
  flex-basis: 30%;
`;
