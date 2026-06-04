import styled from "styled-components";

export const BasisInput = styled.input`
  width: 100%;
  height: 39px;
  padding: 0 12px;
  border: 0.5px solid #999999;
  border-radius: 6px;
  background: transparent;
  outline: none;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &::placeholder {
    color: #999999;
  }
`;
