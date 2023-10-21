import styled, { css } from "styled-components";
import { ReactComponent as SunShield } from "../../svg/icons/sun-shield.svg";
import { ReactComponent as MoonShield } from "../../svg/icons/moon-shield.svg";
import { ReactComponent as MenuIcon } from "../../svg/icons/bars-solid.svg";
import { Link } from "react-router-dom";

export const DesktopWrapper = styled("div")`
  @media (max-width: 800px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InvisibleMarker = styled("div")`
  height: 1px;
  width: 100%;
`;
export const MobileWrapper = styled("div")`
  @media (min-width: 800px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const shieldSVGStyles = css`
  width: 40px;
  height: 40px;
`;

export const SunShieldSVG = styled(SunShield)`
  ${shieldSVGStyles}
`;
export const MoonShieldSVG = styled(MoonShield)`
  ${shieldSVGStyles}
`;

export const InvisibleButton = styled("button")`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary1};
  cursor: pointer;
`;

export const LinksWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  @media (max-width: 800px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  margin-right: 50px;
  color: ${({ theme }) => theme.colors.secondary1};
  @media (max-width: 800px) {
    margin-right: 20px;
  }
`;

export const MainWrapper = styled("div")`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary1};
  padding: 20px 0;
  z-index: 10000;
`;
export const BackToTopWrapper = styled("div")`
  width: 300px;
  display: flex;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;
export const BackToTop = styled("button")`
  margin-left: 50px;
  color: ${({ theme }) => theme.colors.primary1};
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.secondary1};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary2 + "C9"};
  }
  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const MenuButton = styled("button")`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.secondary1};
  white-space: nowrap;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const CVDownload = styled(Link)`
  margin-left: 50px;
  text-decoration: none;
  color: white;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.tertiary1};
  border-radius: 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary1 + "C9"};
  }
  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const MenuIconSVG = styled(MenuIcon)`
  width: 25px;
  height: 25px;
`;

export const MenuWrapper = styled("div")`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    display: none;
  }
`;
