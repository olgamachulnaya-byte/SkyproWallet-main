import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { buttonStyles, textSizes } from "../../const";

export const Header = styled.header`
  width: 100%;
  height: 64px;
  background: #ffffff;
`;

export const HeaderBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    padding: 0 32px;
  }

  @media (max-width: 474px) {
    padding: 0 16px;
  }
`;

export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

export const HeaderLogoImg = styled.img`
  width: 144px;
  height: 19px;
  display: block;

  @media (max-width: 600px) {
    width: 109px;
    height: 14px;
  }
`;

export const HeaderNav = styled.nav`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  @media (max-width: 474px) {
    position: static;
    transform: none;
    margin-left: auto;
    margin-right: 16px;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const HeaderNavLink = styled(NavLink)`
  color: #000000;
  font-size: ${textSizes.smallHeader.fontSize};
  font-weight: ${textSizes.smallHeader.fontWeight};
  line-height: 170%;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease;

  &.active {
    color: #7334EA;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:hover {
    color: ${buttonStyles.active.color};
  }
`;

export const HeaderLinkText = styled(Link)`
  color: #000000;
  font-size: ${textSizes.smallHeader.fontSize};
  font-weight: ${textSizes.smallHeader.fontWeight};
  line-height: 170%;
  text-align: center;
  text-decoration: none;
  outline: none;
`;

export const HeaderLinkExitText = styled(HeaderLinkText)`
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 600;
  font-family: inherit;

  &:hover {
    color: ${buttonStyles.active.color};
  }

  @media (max-width: 600px) {
    font-size: ${textSizes.small.fontSize};
  }
`;

export const MobileMenuWrap = styled.div`
  position: relative;
`;

export const MobileMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: none;
  color: ${({ $isOpen }) => ($isOpen ? "#7334EA" : "#000000")};
  font-size: ${textSizes.small.fontSize};
  font-weight: ${({ $isOpen }) => ($isOpen ? 600 : 400)};
  line-height: 100%;
  cursor: pointer;
`;

export const MobileHeaderLogoImg = styled.img`
  width: 7px;
  height: 7px;
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const MobileDropdown = styled.div`
  position: absolute;
  z-index: 20;
  top: 26px;
  right: 0;
  width: 136px;
  padding: 9px 8px;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const MobileHeaderMenuItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const MobileMenuItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 25px;
  padding: 0 10px;
  border-radius: 24px;
  background: #F4F5F6;
  color: #000000;
  font-size: 10px;
  font-weight: 400;
  line-height: 100%;
  white-space: nowrap;
  text-decoration: none;

  &.active {
    background: #F1EBFD;
    color: #7334EA;
  }
`;

export const HeaderContainer = styled.div``;
export const MobileDropdownLink = styled.div``;
