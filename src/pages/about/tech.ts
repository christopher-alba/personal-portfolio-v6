type Technology = {
  name: string;
  rating: number;
  formalEducation: boolean;
  practicalExperience: boolean;
  paidExperience: boolean;
};

export default [
  {
    name: "React",
    rating: 1,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Angular",
    rating: 0.7,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Vue",
    rating: 0.5,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Javascript",
    rating: 1,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Typescript",
    rating: 1,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "C#",
    rating: 0.7,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Java",
    rating: 0.7,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Cypress",
    rating: 0.8,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Playwright",
    rating: 0.8,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Node.js + Express",
    rating: 0.8,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: false,
  },
] as Technology[];
