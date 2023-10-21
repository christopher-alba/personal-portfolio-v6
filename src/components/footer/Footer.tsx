import { FC, useContext } from "react";
import {
  FacebookIcon,
  GithubIcon,
  IconWrapper,
  InstagramIcon,
  LinkedinIcon,
  MainWrapper,
  StyledLink,
} from "./styled";
import { Container } from "../container";
import { ThemeContext } from "styled-components";

const Footer: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <MainWrapper>
        <Container>
          <IconWrapper>
            <StyledLink
              href="https://www.facebook.com/christopher.alba.357/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </StyledLink>
            <StyledLink
              href="https://github.com/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </StyledLink>
            <StyledLink
              href="https://www.linkedin.com/in/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/alba.sy.chris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </StyledLink>
          </IconWrapper>
        </Container>
      </MainWrapper>
      <p style={{ textAlign: "center" }}>
        This website was designed and built by Christopher Sy Alba:{" "}
        <a
          href="https://github.com/christopher-alba/personal-portfolio-v6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme?.colors.secondary1 }}
        >
          View Website Repository
        </a>
      </p>
    </>
  );
};

export default Footer;
