import { FC, useContext, useEffect } from "react";
import { Container } from "../../components/container";
import { TitleMain } from "../../components/title";
import { projects } from "./data";
import {
  Image,
  ImageWrapper,
  Overlay,
  ProjectWrapper,
  ProjectsWrapper,
  StyledLink,
} from "./styled";
import { TechPill, TechWrapper } from "../journey/styled";
import { ThemeContext } from "styled-components";
import FadeWhenInViewWrapper from "../../components/animationWrappers/FadeWhenInView";

const Projects: FC = () => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    document.getElementsByClassName("invisible-marker")[0].scrollIntoView();
  }, []);
  return (
    <Container>
      <TitleMain>My Personal Projects</TitleMain>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectWrapper>
            <FadeWhenInViewWrapper animateOnce={true}>
              <ImageWrapper>
                <Overlay>
                  <h2>{project.name}</h2>
                  <span>{project.year}</span>
                </Overlay>
                <Image src={project.imgSrc} />
              </ImageWrapper>
              <div>
                {project.github.map((githubObj) => (
                  <StyledLink href={githubObj.url}>
                    Github - {githubObj.type.toLowerCase()}
                  </StyledLink>
                ))}
                <StyledLink
                  href={project.download ?? project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.download ? "Download" : "Visit Website"}
                </StyledLink>
              </div>

              <p>{project.description}</p>
              <TechWrapper>
                {project.tags.map((tag) => (
                  <TechPill>{tag}</TechPill>
                ))}
                {project.devices.map((tag) => (
                  <TechPill style={{ background: theme?.colors.tertiary1 }}>
                    {tag}
                  </TechPill>
                ))}
              </TechWrapper>
            </FadeWhenInViewWrapper>
          </ProjectWrapper>
        ))}
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;
