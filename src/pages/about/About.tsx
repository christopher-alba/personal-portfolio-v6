import { FC, useContext } from "react";
import { Container } from "../../components/container";
import { TitleMain } from "../../components/title";
import {
	GradSVG,
	LaptopSVG,
	SwordHorizontalSVGStyled,
	WrapperDiv1,
	WrapperDiv2,
	WrapperDiv3,
} from "./styled";
import SwordsVertical from "../../components/graphics/swords/SwordsVertical";
import { DefaultTheme, ThemeContext } from "styled-components";
import SwordsHorizontal from "../../components/graphics/swords/SwordsHorizontal";

const About: FC = () => {
	const theme = useContext(ThemeContext) as DefaultTheme;
	return (
		<>
			<Container>
				<TitleMain>About</TitleMain>
				<WrapperDiv1>
					<WrapperDiv2>
						<GradSVG />
						<h2>
							<strong>Engineering (Honors) Graduate</strong>
						</h2>
						<p>
							I am thrilled to have graduated from Computer
							Systems Engineering (honors) at the University of
							Auckland, with a focus on software engineering, on
							May 3rd, 2023. This degree is a significant
							achievement for me and I feel well-prepared to enter
							the tech industry with the skills I have gained.
							Throughout my studies, I have acquired a solid
							foundation in programming, software design and
							analysis, which are all vital in today's
							technology-driven world. Additionally, I have honed
							my problem-solving, critical thinking, and
							communication skills, which will serve me well in my
							future career. I am proud of all that I have
							accomplished during my time at the University of
							Auckland and excited for what the future holds for
							me in the tech industry.
						</p>
						<SwordsVertical
              color1={theme.colors.secondary1}
              color2={theme.colors.tertiary1}					/>
					</WrapperDiv2>
					<SwordHorizontalSVGStyled
						color1={theme.colors.secondary1}
						color2={theme.colors.tertiary1}
					/>
					<WrapperDiv2>
						<LaptopSVG />
						<h2>
							<strong>Passionate Software Engineer</strong>
						</h2>
						<p>
							As someone who is passionate about software
							engineering, I find myself constantly drawn to the
							world of coding and programming. There's something
							about the process of designing and building software
							that just clicks with me - the logic, the
							problem-solving, the creativity - it all comes
							together in a way that feels incredibly satisfying.
							I love the challenge of taking a complex problem and
							breaking it down into smaller, more manageable
							pieces, and then piecing those pieces back together
							into a working program. And there's nothing quite
							like the feeling of seeing something you've built
							come to life, running smoothly and efficiently. For
							me, software engineering isn't just a job or a hobby
							- it's a true passion, and I can't imagine doing
							anything else.
						</p>
					</WrapperDiv2>
				</WrapperDiv1>
			</Container>
			<WrapperDiv3>
				<Container>
					<h2>
						<strong>Results Oriented Professional</strong>
					</h2>
					<p>
						As a results-oriented professional, I'm constantly
						focused on achieving my goals and delivering measurable
						outcomes. Whether I'm working on a project, leading a
						team, or collaborating with others, my priority is
						always to produce results that are both impactful and
						meaningful. I believe that success is not just about
						putting in the effort, but also about being strategic
						and efficient with my time and resources. I am
						constantly looking for ways to optimize my workflow and
						streamline processes in order to maximize my
						productivity and ensure that I'm always delivering the
						best results possible. At the end of the day, I'm driven
						by the satisfaction that comes from achieving my
						objectives and making a real difference in the work that
						I do.
					</p>
					<SwordsHorizontal
						color1={theme.colors.secondary1}
						color2={theme.colors.primary1}
					/>
				</Container>
			</WrapperDiv3>
		</>
	);
};

export default About;
