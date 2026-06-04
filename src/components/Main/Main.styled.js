import styled from "styled-components";
import { textSizes } from "../../const";

export const SMain = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 120px 72px;
  background: #F4F5F6;

  @media (max-width: 1200px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 474px) {
    padding: 24px 16px 40px;
  }
`;

export const SMainHeader = styled.h1`
  margin: 0 0 32px;
  color: #000000;
  font-size: ${textSizes.largeH1.fontSize};
  font-weight: ${textSizes.largeH1.fontWeight};
  line-height: 120%;

  @media (max-width: 474px) {
    font-size: ${textSizes.largeH2.fontSize};
    line-height: 100%;
    margin-bottom: 24px;
  }
`;

export const STables = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 789px) 380px;
  gap: 34px;
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

export const STableSection = styled.section`
  width: 100%;
  max-width: 789px;
  height: 618px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 1240px) {
    max-width: none;
  }

  @media (max-width: 474px) {
    height: 618px;
  }
`;

export const STableHeader = styled.div`
  min-height: 96px;
  padding: 32px 32px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

export const SSectionTitle = styled.h2`
  margin: 0;
  color: #000000;
  font-size: ${textSizes.largeH2.fontSize};
  font-weight: ${textSizes.largeH2.fontWeight};
  line-height: 100%;
`;

export const STableBodyWrapper = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-bottom: 24px;
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

export const SExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;
