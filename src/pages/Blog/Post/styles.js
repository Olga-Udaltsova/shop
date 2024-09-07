import styled from "styled-components";

export const Post = styled.div`
  max-width: 555px;
  width: 100%;
  position: relative;
  > img {
    width: 555px;
    height: 300px;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  width: 320px;
  background: #fff;
  padding-top: 57px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h5 {
    font-size: 20px;
    text-transform: capitalize;
  }

  p {
    font-size: 14px;
    color: #444;
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 14px;
  align-items: center;
  background: inherit;
  cursor: pointer;
  width: fit-content;
  font-size: 16px;
  font-weight: bold;
  border: none;
  img {
    width: 25px;
  }
`;

export const Image = styled.img`
  position: relative;
  bottom: 130px;
  right: 0;
`;
