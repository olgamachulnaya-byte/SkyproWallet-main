import styled from "styled-components";
import { buttonStyles, textSizes } from "../../const";
import { Button } from "../Button/Button.styled";

export const Analysis = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 120px 72px;
  background: #F4F5F6;
  color: #000000;

  @media (max-width: 1200px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 474px) {
    padding: 24px 16px 32px;
  }
`;

export const AnalysisHeader = styled.h1`
  margin: 0 0 32px;
  color: #000000;
  font-size: ${textSizes.largeH1.fontSize};
  font-weight: ${textSizes.largeH1.fontWeight};
  line-height: 120%;

  @media (max-width: 474px) {
    margin-bottom: 24px;
    font-size: ${textSizes.largeH2.fontSize};
    line-height: 100%;
  }
`;

export const AnalysisExspenseContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 380px minmax(0, 789px);
  gap: 31px;
  align-items: start;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 474px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const AnalysisCalendarContainer = styled.section`
  width: 100%;
  max-width: 380px;
  height: 540px;
  overflow: hidden;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 474px) {
    max-width: 380px;
    height: 540px;
  }
`;

export const AnalysisTableContainer = styled.section`
  width: 100%;
  max-width: 789px;
  height: 540px;
  overflow: hidden;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 1240px) {
    max-width: none;
  }

  @media (max-width: 474px) {
    max-width: 380px;
    height: 540px;
  }
`;

export const AnalysisTableHeaderblock = styled.div`
  display: flex;
`;

export const AnalysisTableHeader = styled.h2`
  color: #000000;
  font-size: ${textSizes.largeH2.fontSize};
  font-weight: ${textSizes.largeH2.fontWeight};
`;

export const AnalysisTableHeaderFilterBlock = styled.div`
  display: flex;
`;

export const AnalysisExpenseContainer = styled.div`
  box-sizing: border-box;
  max-width: 400px;
  border-radius: 30px;
  background-color: #ffffff;
`;

export const CalendarHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom: 0.5px solid #999999;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 0;
`;

export const CalendarHeaderTitle = styled.h2`
  color: #000000;
  font-size: ${textSizes.largeH2.fontSize};
  font-weight: ${textSizes.largeH2.fontWeight};
  line-height: 100%;
`;

export const CalendarFilterLinks = styled.div`
  display: flex;
  gap: 12px;
`;

export const CalendarNavLink = styled.button`
  border: none;
  background: none;
  color: ${(props) => (props.$active ? "#7334EA" : "#000000")};
  font-size: ${textSizes.small.fontSize};
  font-weight: ${(props) => (props.$active ? 600 : 400)};
  line-height: 100%;
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
  text-underline-offset: 4px;
  cursor: pointer;

  &:hover {
    color: ${buttonStyles.active.color};
  }
`;

export const CalendarWeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  justify-content: space-between;
  padding: 0 32px 8px;
`;

export const CalendarWeekDayBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarWeekDay = styled.p`
  color: #999999;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 100%;
`;

export const CalendarBody = styled.div`
  height: calc(100% - 94px);
  padding: 24px 0 0 32px;
`;

export const PeriodButtonBlock = styled.div`
  display: none;

  @media (max-width: 474px) {
    display: block;
    width: 100%;
    max-width: 380px;
    margin-top: 24px;
  }
`;

export const PeriodButton = styled(Button)`
  color: #ffffff;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.medium.fontWeight};
`;
