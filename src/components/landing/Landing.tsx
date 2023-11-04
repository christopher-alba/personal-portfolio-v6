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
import { animated, useSpring } from "@react-spring/web";
import { spring1, spring2, spring3 } from "./springs";

const Landing: FC = () => {
  const theme: DefaultTheme = useContext(ThemeContext) as DefaultTheme;
  const onDownArrowClick = () => {
    const target = document.getElementsByClassName("navbar")[0];
    target.scrollIntoView({
      behavior: "smooth",
    });
  };

  const styles = useSpring(spring1);
  const styles2 = useSpring(spring2);
  const styles3 = useSpring(spring3);

  return (
    <WrapperDiv>
      <TopLeft
        style={styles}
        as={animated.svg}
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />
      <TopRight
        style={styles}
        as={animated.svg}
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />
      <BottomLeft
        style={styles}
        as={animated.svg}
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />
      <BottomRight
        style={styles}
        as={animated.svg}
        color1={theme.colors.secondary1}
        color2={theme.colors.tertiary1}
      />

      <animated.div style={styles3}>
        <StyledTulipSVG />
      </animated.div>
      <NameTitle as={animated.h1} style={styles2}>
        Christopher Sy Alba
      </NameTitle>
      <SubTitle as={animated.h2} style={styles3}>
        Professional Software Engineer
      </SubTitle>
      <InvisibleButton
        onClick={onDownArrowClick}
        as={animated.button}
        style={styles3}
      >
        <StyledArrowDownSVG />
      </InvisibleButton>
    </WrapperDiv>
  );
};

export default Landing;
