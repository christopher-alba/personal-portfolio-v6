import styled, { css } from "styled-components";
import { ReactComponent as Facebook } from "../../svg/icons/facebookIcon.svg";
import { ReactComponent as Linkedin } from "../../svg/icons/linkedinIcon.svg";
import { ReactComponent as Github } from "../../svg/icons/githubIcon.svg";
import { ReactComponent as Instagram } from "../../svg/icons/instagramIcon.svg";
export const MainWrapper = styled("div")`
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  padding: 50px 0;
  margin-top: 150px;
`;

const iconStyles = css`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.colors.primary1};
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

export const FacebookIcon = styled(Facebook)`
  ${iconStyles}
`;
export const LinkedinIcon = styled(Linkedin)`
  ${iconStyles}
`;
export const GithubIcon = styled(Github)`
  ${iconStyles}
`;
export const InstagramIcon = styled(Instagram)`
  ${iconStyles}
`;

export const IconWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin-right: 40px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const StyledLink = styled("a")`
  text-decoration: none;
`;
