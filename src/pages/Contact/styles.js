import styled from "styled-components";

export const Contact = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: relative;
  top: 200px;
  display: flex;
  gap: 115px;
  align-items: center;
  margin-left: 200px;
  > img {
    width: 194px;
    position: absolute;
    top: 20px;
    right: 200px;
  }
`;

export const Image = styled.div`
  margin-top: 100px;
  img {
    width: 100%;
  }
`;
