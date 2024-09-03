import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  img {
    width: 1040px;
    height: 800px;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 200px;
  right: 300px;
  max-width: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 70px;
    line-height: 70px;
    text-transform: capitalize;
  }
  p:first-child {
    font-size: 14px;
    text-transform: uppercase;
    span {
      font-weight: bold;
    }
  }
  p {
    font-size: 16px;
    line-height: 27.2px;
    color: #444;
  }
`;

export const Button = styled.div`
  margin-top: 20px;
`;
