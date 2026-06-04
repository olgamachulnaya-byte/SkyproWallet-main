import styled from "styled-components";
import { textSizes } from "../../const";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 29px;
  scrollbar-width: thin;
  scrollbar-color: #C7C7C7 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #C7C7C7;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: ${textSizes.largeH2.fontSize};
  font-weight: ${textSizes.largeH2.fontWeight};
`;

export const ModeSwitch = styled.div`
  display: flex;
  gap: 12px;
`;

export const ModeButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => (props.$active ? "#7334EA" : "#000000")};
  font-size: ${textSizes.smallHeader.fontSize};
  font-weight: ${(props) => (props.$active ? 600 : 400)};
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
  text-underline-offset: 4px;
  cursor: pointer;

  &:hover {
    color: #7334EA;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const YearLabel = styled.div`
  margin-bottom: 12px;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 16px;
`;

export const MonthButton = styled.button`
  width: 103px;
  height: 34px;
  padding: 8px 12px;
  border: none;
  border-radius: 30px;
  background: ${(props) => (props.$selected ? "#F1EBFD" : "#F4F5F6")};
  color: ${(props) => (props.$selected ? "#7334EA" : "#000000")};
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: #F1EBFD;
    color: #7334EA;
  }
`;
