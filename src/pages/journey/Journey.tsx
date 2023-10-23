import { FC, useEffect } from "react";
import { TitleMain } from "../../components/title";
import { data } from "./data";
import {
  ButtonWrapper,
  CompanyWrapper,
  ContainerStyled,
  H1Styled,
  H2Styled,
  LearnMoreButtonLink,
  PStyled,
  TechPill,
  TechWrapper,
  Timeline,
} from "./styled";
import { Container } from "../../components/container";
const Journey: FC = () => {
  useEffect(() => {
    document.getElementsByClassName("invisible-marker")[0].scrollIntoView();
  }, []);
  return (
    <Container>
      <TitleMain>My Career Journey</TitleMain>
      <ContainerStyled className="start">
        <Timeline />
        {data.map((company, index) => {
          const type = index % 2;
          if (type > 0) {
            return (
              <CompanyWrapper
                style={{
                  margin: "30px 0 30px auto",
                  textAlign: "left",
                  zIndex: 1,
                }}
              >
                <H2Styled>{company.dateString}</H2Styled>
                <H2Styled>{company.name}</H2Styled>
                <H1Styled>{company.position}</H1Styled>
                <PStyled>{company.summary}</PStyled>
                <TechWrapper>
                  {company.technologies.map((tech) => {
                    return <TechPill>{tech}</TechPill>;
                  })}
                </TechWrapper>
                <ButtonWrapper style={{ justifyContent: "flex-end" }}>
                  <LearnMoreButtonLink href={company.website}>
                    Learn More About {company.nameShort}
                  </LearnMoreButtonLink>
                </ButtonWrapper>
              </CompanyWrapper>
            );
          } else {
            return (
              <CompanyWrapper
                style={{
                  margin: "30px auto 30px 0",
                  textAlign: "right",
                  zIndex: -1,
                }}
              >
                <H2Styled>{company.dateString}</H2Styled>
                <H2Styled>{company.name}</H2Styled>
                <H1Styled>{company.position}</H1Styled>
                <PStyled>{company.summary}</PStyled>
                <TechWrapper style={{ justifyContent: "flex-end" }}>
                  {company.technologies.map((tech) => {
                    return <TechPill>{tech}</TechPill>;
                  })}
                </TechWrapper>
                <ButtonWrapper>
                  <LearnMoreButtonLink href={company.website}>
                    Learn More About {company.nameShort}
                  </LearnMoreButtonLink>
                </ButtonWrapper>
              </CompanyWrapper>
            );
          }
        })}
      </ContainerStyled>
    </Container>
  );
};

export default Journey;
