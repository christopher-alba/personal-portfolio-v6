import { FC, useContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
import {
  BackToTop,
  BackToTopWrapper,
  CVDownload,
  DesktopWrapper,
  InvisibleButton,
  LinksWrapper,
  MainWrapper,
  MenuButton,
  MenuIconSVG,
  MenuWrapper,
  MobileWrapper,
  MoonShieldSVG,
  StyledLink,
  SunShieldSVG,
} from "./styled";
import { Container } from "../container";
import { useLocation } from "react-router-dom";
const Navbar: FC<{ setTheme: (theme: DefaultTheme) => void }> = ({
  setTheme,
}) => {
  const theme = useContext(ThemeContext);
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname ?? "/");
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleTheme = () => {
    if (theme?.name === "light") {
      localStorage.setItem("theme", JSON.stringify(themes.dark));
      setTheme(themes.dark);
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    }
  };
  const determineActiveLinkState = (location: string) => {
    return activeLink === location ? "underline" : "none";
  };
  return (
    <>
      <MainWrapper>
        <Container>
          <DesktopWrapper>
            <LinksWrapper>
              <StyledLink
                style={{
                  textDecoration: determineActiveLinkState("/"),
                }}
                to=""
              >
                About
              </StyledLink>
              <StyledLink
                style={{
                  textDecoration: determineActiveLinkState("/journey"),
                }}
                to="journey"
              >
                Journey
              </StyledLink>
              <StyledLink
                style={{
                  textDecoration: determineActiveLinkState("/projects"),
                }}
                to="projects"
              >
                Projects
              </StyledLink>
            </LinksWrapper>
            <InvisibleButton onClick={toggleTheme}>
              {theme?.name === "light" ? <MoonShieldSVG /> : <SunShieldSVG />}
            </InvisibleButton>
            <BackToTopWrapper>
              <CVDownload to="cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </CVDownload>
              <BackToTop onClick={backToTop}>Back to top</BackToTop>
            </BackToTopWrapper>
          </DesktopWrapper>
          <MobileWrapper>
            <LinksWrapper>
              <StyledLink
                style={{
                  textDecoration: determineActiveLinkState("/"),
                }}
                to=""
              >
                About
              </StyledLink>
              <StyledLink
                style={{
                  textDecoration: determineActiveLinkState("/journey"),
                }}
                to="journey"
              >
                Journey
              </StyledLink>
              <StyledLink
                style={{
                  textDecoration: determineActiveLinkState("/projects"),
                }}
                to="projects"
              >
                Projects
              </StyledLink>
            </LinksWrapper>
            <MenuButton onClick={toggleMenu}>
              <MenuIconSVG />
            </MenuButton>
          </MobileWrapper>
          {displayMenu && (
            <MenuWrapper>
              <BackToTopWrapper>
                <CVDownload
                  to="cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </CVDownload>
                <InvisibleButton onClick={toggleTheme}>
                  {theme?.name === "light" ? (
                    <MoonShieldSVG />
                  ) : (
                    <SunShieldSVG />
                  )}
                </InvisibleButton>
                <BackToTop onClick={backToTop}>Back to top</BackToTop>
              </BackToTopWrapper>
            </MenuWrapper>
          )}
        </Container>
      </MainWrapper>
    </>
  );
};

export default Navbar;
