import styled from "styled-components";
import { textSizes } from "../../const";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  background: #ffffff;
  border-radius: 30px;

  @media (max-width: 474px) {
    padding: 32px;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TotalAmount = styled.h2`
  color: #000000;
  font-size: ${textSizes.largeH2.fontSize};
  font-weight: ${textSizes.largeH2.fontWeight};
  line-height: 100%;

  @media (max-width: 474px) {
    font-size: ${textSizes.mobileH2.fontSize};
  }
`;

export const Subtext = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  color: #999999;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 100%;
`;

export const SubtextSpan = styled.span`
  color: #999999;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.medium.fontWeight};
  line-height: 100%;
`;

export const Chart = styled.div`
  height: 390px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 31px;

  @media (max-width: 800px) {
    gap: 12px;
  }

  @media (max-width: 474px) {
    height: 390px;
    gap: 6px;
  }
`;

export const BarBlock = styled.div`
  width: 94px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  @media (max-width: 474px) {
    width: 46px;
    gap: 12px;
  }
`;

export const ValueText = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  white-space: nowrap;

  @media (max-width: 474px) {
    font-size: 10px;
    font-weight: 600;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: ${({ $height }) => `${$height}%`};
  min-height: 4px;
  border-radius: 10px;
  transition: height 0.3s ease;
`;

export const Label = styled.span`
  color: #000000;
  font-size: ${textSizes.small.fontSize};
  font-weight: ${textSizes.small.fontWeight};
  line-height: 100%;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 474px) {
    font-size: 10px;
  }
`;
