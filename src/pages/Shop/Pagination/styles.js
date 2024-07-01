import styled from "styled-components";

export const Pages = styled.div`
  font-size: 20px;
  margin: 0 auto 50px auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Page = styled.div`
  text-decoration: underline;
  cursor: pointer;

  &.currentPage {
    font-weight: 700;
    color: #000;
  }
  &.page {
    font-weight: 400;
    color: #444;
  }
`;

export const Pointer = styled.span`
  cursor: pointer;
`;
