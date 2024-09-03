import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  padding: 10px 0 17px;
  font-size: 14px;
  font-weight: 400;
`;

export const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  padding: 10px 0 17px;
  font-size: 14px;
  font-weight: 400;
  resize: none;
`;
