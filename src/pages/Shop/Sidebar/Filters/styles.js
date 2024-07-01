import styled from "styled-components";

export const NameCategoty = styled.p`
  margin-bottom: 14px;
  font-size: 24px;
  border-bottom: 3px solid #444;
  padding-bottom: 16px;
`;

export const LabelInput = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    input {
      border: none;
      border-radius: 5px;
      outline: 2px solid #444444;
      padding: 5px;
      &:focus {
        outline: 2px solid #ff8e8e;
      }
      &:hover {
        box-shadow: 0 0 10px #ff8e8e;
      }
    }
  }
`;

export const Category = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
  margin-left: 30px;
`;

export const List = styled.li`
  list-style: ${(props) => (props.$isSelected ? "circle" : "square")};
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? "#ff8e8e" : "#000")};
  &:hover {
    color: #ff8e8e;
    list-style: circle;
  }
`;

export const Checkboxs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
  margin-left: 15px;
  input {
    margin-right: 14px;
    cursor: pointer;
    &:checked {
      & + span {
        color: #ff8e8e;
      }
    }
  }
  label {
    span {
      cursor: pointer;
      color: #000;
      &:hover {
        color: #ff8e8e;
      }
    }
  }
`;

export const ButtonFilter = styled.button`
  border: none;
  background: #000;
  margin-top: 50px;
  padding: 17px 74.5px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #ff8e8e;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
