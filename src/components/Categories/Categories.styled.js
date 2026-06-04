import styled from "styled-components";
import { textSizes } from "../../const";
import {
  getImageFilter,
  getSelectedBackground,
  getSelectedColor,
} from "../../utils/styledUtils";

export const Tag = styled.span`
  min-height: 30px;
  padding: 8px 20px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: ${({ $isSelected }) => getSelectedBackground($isSelected)};
  color: ${({ $isSelected }) => getSelectedColor($isSelected)};
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 100%;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;

  img {
    width: 14px;
    height: 14px;
    filter: ${({ $isSelected }) => getImageFilter($isSelected)};
  }
`;
