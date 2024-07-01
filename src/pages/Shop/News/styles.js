import styled from "styled-components";

export const News = styled.div`
  position: absolute;
  top: 0;
  left: 300px;
  background: #fff;
  padding: 60px;
  > img {
    width: 130px;
    background: #fff;
    position: absolute;
    top: -50px;
    left: 430px;
  }
`;

export const Header = styled.p`
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Background = styled.img`
  width: 100%;
`;

export const Subscribe = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 4px;
  > input {
    width: 360px;
    border: none;
    border-bottom: 1px solid #444;
    padding-bottom: 16px;
  }
  > button {
    border: none;
    background: #000;
    color: #fff;
    padding: 17px 30px;
    cursor: pointer;
    &:hover {
      background: #ff8e8e;
    }
  }
`;
