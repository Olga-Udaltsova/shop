import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  > input {
    width: 100%;
    border: none;
    padding-bottom: 16px;
    border-bottom: 2px solid #444444;
    margin-right: 10px;
    font-size: 14px;
    opacity: 0.5;
    &:hover {
      box-shadow: 0 0 10px #ff8e8e;
      opacity: 1;
    }
  }
`;
