import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  min-height: calc(100vh - 64px);
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F4F5F6;

  @media (max-width: 474px) {
    align-items: flex-start;
  }
`;
