import styled from "styled-components";

export const Form = styled.form`
  border: 1px solid white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
`;
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
export const Button = styled.button`
  border-style: none;
  height: 25px;
  width: 100px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 3px gray;
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
`;
