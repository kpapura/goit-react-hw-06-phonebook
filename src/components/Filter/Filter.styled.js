import styled from "styled-components";

export const Input = styled.input`
  margin-top: 3px;
  width: 100%;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #333;
  &:hover {
    box-shadow: 1px 1px 5px 1px white;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
`;