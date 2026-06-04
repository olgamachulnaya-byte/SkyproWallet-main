import styled from "styled-components";
import { textSizes } from "../../const";

export const Button = styled.button`
  width: 100%;
  height: 39px;
  border: none;
  border-radius: 6px;
  padding: 12px;
  background: #7334EA;
  color: #ffffff;
  font-weight: ${textSizes.medium.fontWeight};
  font-size: ${textSizes.small.fontSize};
  line-height: 100%;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.2s ease, background-color 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    background: #999999;
    cursor: default;
  }
`;
