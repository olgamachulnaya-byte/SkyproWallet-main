import styled from "styled-components";
import { textSizes } from "../../const";
import { getSelectedColor } from "../../utils/styledUtils";

const getTextStyles = () => `
  font-family: Montserrat, Arial, sans-serif;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 15px;
`;

export const RowHeader = styled.div`
  width: 100%;
  min-height: 27px;
  display: grid;
  grid-template-columns: 140px 140px 140px 140px 1fr;
  column-gap: 32px;
  align-items: center;
  padding: 0 32px 7px;
  border-bottom: 0.5px solid #999999;
  color: #999999;
  ${getTextStyles()}

  @media (max-width: 760px) {
    grid-template-columns: 1.2fr 1fr 0.9fr 0.9fr 24px;
    column-gap: 14px;
  }
`;

export const Row = styled.div`
  width: 100%;
  min-height: 29px;
  display: grid;
  grid-template-columns: 140px 140px 140px 140px 1fr;
  column-gap: 32px;
  align-items: center;
  padding: 7px 32px;
  color: ${({ $isSelected }) => getSelectedColor($isSelected)};
  background: ${({ $isSelected }) => ($isSelected ? "#F1EBFD" : "transparent")};
  ${getTextStyles()}
  cursor: pointer;
  outline: none;

  @media (max-width: 760px) {
    grid-template-columns: 1.2fr 1fr 0.9fr 0.9fr 24px;
    column-gap: 14px;
  }
`;

export const Cell = styled.div`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const IconButton = styled.button`
  width: 12px;
  height: 12px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.45;
  filter: ${({ $isSelected }) =>
    $isSelected
      ? "brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(3021%) hue-rotate(252deg) brightness(95%) contrast(95%)"
      : "none"};

  img {
    width: 12px;
    height: 12px;
    display: block;
  }
`;
