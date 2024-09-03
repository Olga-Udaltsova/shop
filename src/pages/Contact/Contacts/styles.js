import styled from "styled-components";

export const Contacts = styled.div`
  max-width: 341px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 36px;
`;

export const Contact = styled.div`
  display: flex;
  > span {
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
     line-height: 27.2px;
    &.phone {
      font-weight: bold;
    }
  }
`;
