import { FC, useContext } from "react";
import TopLeft from "../graphics/corner-art/TopLeft";
import { DefaultTheme, ThemeContext } from "styled-components";
import {
  InvisibleButton,
  NameTitle,
  StyledArrowDownSVG,
  StyledTulipSVG,
  SubTitle,
  WrapperDiv,
} from "./styled";
import TopRight from "../graphics/corner-art/TopRight";
import BottomLeft from "../graphics/corner-art/BottomLeft";
import BottomRight from "../graphics/corner-art/BottomRight";

const Landing: FC = () => {
  const theme: DefaultTheme = useContext(ThemeContext) as DefaultTheme;
  return (
    <WrapperDiv>
      <TopLeft
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />
      <TopRight
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />
      <BottomLeft
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />
      <BottomRight
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />

      <StyledTulipSVG />
      <NameTitle>Christopher Sy Alba</NameTitle>
      <SubTitle>Professional Software Engineer</SubTitle>
      <InvisibleButton>
        <StyledArrowDownSVG />
      </InvisibleButton>
    </WrapperDiv>
  );
};

export default Landing;
