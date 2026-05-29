import styled from "styled-components";
import { textSizes, inputColors } from "../../const";
import { Link } from "react-router-dom";
import { BasisInput } from "../Input/Input.styled";
import { Button } from "../Button/Button.styled";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;

  @media (max-width: 474px) {
    align-items: flex-start;
    padding-top: 36px;
  }
`;

export const ModalBlok = styled.div`
  width: 100%;
  max-width: 380px;
  padding: 32px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: 474px) {
    max-width: 380px;
    min-height: auto;
  }
`;

export const Title = styled.h2`
  margin: 0 0 24px;
  font-size: ${textSizes.largeH2.fontSize};
  font-weight: ${textSizes.largeH2.fontWeight};
  line-height: 120%;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 12px;
`;

export const InputAuthForm = styled(BasisInput)`
  margin-bottom: 0;
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

  &::placeholder {
    color: ${({ $error }) => ($error ? "#F25050" : "#999999")};
  }
`;

export const InputErrorMark = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  display: inline-flex;
  align-items: center;
  max-width: calc(100% - 24px);
  transform: translateY(-50%);
  color: #F25050;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  pointer-events: none;
`;

export const InputValueMirror = styled.span`
  overflow: hidden;
  max-width: calc(100% - 10px);
  color: transparent;
  white-space: pre;
`;

export const InputStar = styled.span`
  margin-left: 4px;
  color: #F25050;
`;

export const FormError = styled.p`
  margin: 2px 0 22px;
  color: #F25050;
  font-size: 12px;
  font-weight: 400;
  line-height: 160%;
  text-align: center;
`;

export const AuthButton = styled(Button)`
  margin-top: ${({ disabled }) => (disabled ? "0" : "12px")};
  margin-bottom: 24px;
`;

export const TextGroep = styled.div`
  text-align: center;
`;

export const ModalText = styled.p`
  color: #999999;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 100%;
`;

export const ModalLink = styled(ModalText).attrs({ as: Link })`
  display: inline-block;
  margin-top: 8px;
  text-decoration: underline;
  text-underline-offset: 3px;
`;
