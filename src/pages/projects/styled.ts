import styled from "styled-components";

export const ProjectsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectWrapper = styled("div")`
  width: 25%;
  border: 15px solid transparent;
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 1550px) {
    width: 33.33%;
  }
  @media (max-width: 1300px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Overlay = styled("div")`
  background: ${({ theme }) => theme.colors.primary2};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 100% 76%, 78% 100%, 0 100%, 0% 50%);
  transition: 300ms;
`;
export const ImageWrapper = styled("div")`
  position: relative;
  border: 10px solid ${({ theme }) => theme.colors.secondary1};
  height: 300px;
  &:hover ${Overlay} {
    opacity: 0;
  }
`;
export const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledLink = styled("a")`
  color: ${({ theme }) => theme.colors.secondary1};
  margin: 10px 10px 0 0;
  display: inline-block;
  font-weight: 600;
`;
