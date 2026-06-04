import styled from "styled-components";
import { inputColors, textSizes } from "../../const";
import { AuthButton, InputAuthForm, Title } from "../AuthForm/AuthForm.styled";

export const TitleForm = styled(Title)`
  margin-bottom: 24px;
  text-align: left;
`;

export const InputExpenseForm = styled(InputAuthForm)`
  height: 39px;
  margin-bottom: 24px;
  border-color: ${({ $error, $isFocused }) =>
    $error
      ? inputColors.error.border
      : $isFocused
      ? inputColors.active.border
      : inputColors.static.border};
  background: ${({ $error, $isFocused }) =>
    $error
      ? inputColors.error.background
      : $isFocused
      ? inputColors.active.background
      : inputColors.static.background};
`;

export const InputTitle = styled.p`
  margin-bottom: 16px;
  color: #000000;
  font-size: ${textSizes.medium.fontSize};
  font-weight: ${textSizes.medium.fontWeight};
  line-height: 100%;
  text-align: left;
`;


export const ErrorMark = styled.span`
  color: #F25050;
`;

export const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
`;

export const ExpenseButton = styled(AuthButton)`
  margin: 0;
`;
