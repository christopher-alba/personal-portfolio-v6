import { FC, useContext } from "react";
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

const Projects: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <TitleMain>My Personal Projects</TitleMain>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectWrapper>
            <ImageWrapper>
              <Overlay>
                <h2>{project.name}</h2>
                <span>{project.year}</span>
              </Overlay>
              <Image src={project.imgSrc} />
            </ImageWrapper>
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
          </ProjectWrapper>
        ))}
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;
