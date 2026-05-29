import * as S from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../const";

export default function Header() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 474);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 474);
      if (window.innerWidth > 474) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate(RoutesApp.SIGN_IN);
  }

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <S.Header>
      <S.HeaderBlock>
        <S.HeaderLogo to={RoutesApp.MAIN} aria-label="Skypro Wallet">
          <S.HeaderLogoImg src="/logo.svg" alt="Skypro.Wallet" />
        </S.HeaderLogo>

        {user && (
          <>
            <S.HeaderNav>
              {!isMobile ? (
                <S.HeaderLinks>
                  <S.HeaderNavLink to={RoutesApp.MAIN}>Мои расходы</S.HeaderNavLink>
                  <S.HeaderNavLink to={RoutesApp.ANALYSIS}>
                    Анализ расходов
                  </S.HeaderNavLink>
                </S.HeaderLinks>
              ) : (
                <S.MobileMenuWrap>
                  <S.MobileMenuButton
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    $isOpen={isMenuOpen}
                  >
                    Мои расходы
                    <S.MobileHeaderLogoImg
                      alt=""
                      src="/Polygon.svg"
                      $isOpen={isMenuOpen}
                    />
                  </S.MobileMenuButton>

                  {isMenuOpen && (
                    <S.MobileDropdown>
                      <S.MobileHeaderMenuItem>
                        <S.MobileMenuItemLink to={RoutesApp.MAIN} onClick={closeMenu}>
                          Мои расходы
                        </S.MobileMenuItemLink>
                      </S.MobileHeaderMenuItem>
                      <S.MobileHeaderMenuItem>
                        <S.MobileMenuItemLink to={RoutesApp.ANALYSIS} onClick={closeMenu}>
                          Анализ расходов
                        </S.MobileMenuItemLink>
                      </S.MobileHeaderMenuItem>
                    </S.MobileDropdown>
                  )}
                </S.MobileMenuWrap>
              )}
            </S.HeaderNav>

            <S.HeaderLinkExitText as="button" type="button" onClick={handleLogout}>
              Выход
            </S.HeaderLinkExitText>
          </>
        )}
      </S.HeaderBlock>
    </S.Header>
  );
}
