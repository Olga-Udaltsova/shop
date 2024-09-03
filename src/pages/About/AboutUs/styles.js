import styled from "styled-components";

export const Div = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  p {
    color: #444;
  }

  div:first-child {
    max-width: 472px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 60px;
    > h2 {
      font-size: 40px;
      text-transform: capitalize;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 68px;
  align-items: center;
`;

export const Text = styled.div`
  max-width: 536px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > h3 {
    font-size: 24px;
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    line-height: 27.2px;
  }
  div {
    display: flex;
    gap: 50px;
  }
`;

export const Quantity = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 90px;
    right: 60px;
    font-size: 28px;
    color: #000;
    span {
      font-size: 80px;
    }
  }
  img {
    width: 322px;
  }
`;
