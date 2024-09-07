import styled from "styled-components";

export const Div = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 120px;
  }
  > p {
    font-size: 40px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  line-height: 34px;
  color: #444;
`;

export const Images = styled.div`
  position: relative;
  img:first-child {
    width: 450px;
    height: 337px;
  }
  img:last-child {
    width: 130px;
    position: absolute;
    top: 50px;
    right: -100px;
  }
`;
