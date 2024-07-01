import styled from "styled-components";

export const Label = styled.div`
  display: flex;
  position: absolute;
  background-color: #ff8e8e;
  padding: 5px 10px;
  margin-top: 17px;
  margin-left: 17px;
  background-color: ${props => (props.$sale ? "#FF8E8E" : "#95CCB5")};
  color: #fff;
  font-size: 15px;
  font-weight: 800;
`;
