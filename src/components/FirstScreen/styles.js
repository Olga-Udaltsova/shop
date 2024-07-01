import styled from "styled-components";

export const FirstScreen = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  img:first-child {
    margin-top: 30px;
  }
  img:last-child {
    margin-right: 50px;
  }
`;

export const FirstScreenHead = styled.h1`
  position: absolute;
  top: 90px;
  left: 250px;
  font-size: 80px;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  left: 250px;
`;

export const ButtonsAndLine = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200px;
  > img {
    position: absolute;
    top: 37px;
  }
`;
