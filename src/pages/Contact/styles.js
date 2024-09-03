import styled from "styled-components";

export const Contact = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  gap: 115px;
  align-items: center;
  margin-left: 200px;
  > img {
    width: 194px;
    position: absolute;
    top: 30px;
    right: 400px;
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
  }
`;
