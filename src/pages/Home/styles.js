import styled from "styled-components";

export const FirstScreen = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
`;

export const Banner = styled.img`
  width: 1040px;
  height: 800px;
`;

export const Background = styled.img`
  width: 482px;
`;

export const Text = styled.div`
  position: absolute;
  top: 200px;
  right: 250px;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 120px;
    line-height: 120px;
    text-transform: capitalize;
  }
  p {
    font-size: 14px;
    line-height: 27.2px;
    color: #444;
    text-transform: uppercase;
    span {
      font-weight: bold;
    }
  }
`;

export const Button = styled.div`
  margin-top: 20px;
`;
