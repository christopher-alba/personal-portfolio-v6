import { FC, useContext, useEffect } from "react";
import { TitleMain } from "../../components/title";
import { data } from "./data";
import {
  CompanyWrapper,
  ContainerStyled,
  CurrentCompanyWrapper,
  H2Styled,
  LearnMoreButtonLink,
  PStyled,
  TechPill,
  TechWrapper,
} from "./styled";
import { Container } from "../../components/container";
import { ThemeContext } from "styled-components";

const Journey: FC = () => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    document.getElementsByClassName("invisible-marker")[0].scrollIntoView();
  }, []);
  return (
    <Container className="start">
      <TitleMain>My Career Journey</TitleMain>
      {data.map((company, index) => {
        if (index === 0) {
          return (
            <CurrentCompanyWrapper>
              <ContainerStyled>
                <H2Styled>{company.dateString}</H2Styled>
                <H2Styled style={{ color: theme?.colors.tertiary1 }}>
                  {company.position}
                </H2Styled>
                <H2Styled>{company.nameShort}</H2Styled>
                <PStyled>{company.name}</PStyled>
                <br />
                <p>{company.summary}</p>
                <TechWrapper>
                  {company.technologies.map((tech) => {
                    return <TechPill>{tech}</TechPill>;
                  })}
                </TechWrapper>
              </ContainerStyled>
              <LearnMoreButtonLink
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About {company.nameShort}
              </LearnMoreButtonLink>
            </CurrentCompanyWrapper>
          );
        } else {
          return (
            <CompanyWrapper>
              <ContainerStyled>
                <H2Styled>{company.dateString}</H2Styled>
                <H2Styled style={{ color: theme?.colors.tertiary1 }}>
                  {company.position}
                </H2Styled>
                <H2Styled>{company.nameShort}</H2Styled>
                <PStyled>{company.name}</PStyled>
                <br />
                <p>{company.summary}</p>
                <TechWrapper>
                  {company.technologies.map((tech) => {
                    return <TechPill>{tech}</TechPill>;
                  })}
                </TechWrapper>
              </ContainerStyled>
              <LearnMoreButtonLink
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About {company.nameShort}
              </LearnMoreButtonLink>
            </CompanyWrapper>
          );
        }
      })}
    </Container>
  );
};

export default Journey;
