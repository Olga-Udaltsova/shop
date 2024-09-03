import styled from "styled-components";

export const IconsBoxes = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;
  margin: 150px 0;
`;

export const Box = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  img {
    width: 70px;
  }

  h4 {
    font-size: 24px;
    padding-bottom: 14px;
    border-bottom: 2px solid #000;
  }
  p {
    margin-top: 25px;
    font-size: 16px;
    line-height: 27.2px;
    color: #444;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 35px;
  right: -15px;
  img {
    width: 130px;
  }
`;
