"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
  );
}

const testimonials = [
  {
    quote:
      "Mentoring Abhishek was an enriching experience, as he displayed a strong passion for programming and an impressive commitment to excellence. Abhishek consistently approached challenges with determination and a thoughtful problem-solving mindset. Their enthusiasm for learning and ability to deliver high-quality work make them an asset to any team or project.",
    name: "Rajendra K Pandey",
    title: "Researcher, M.Tech Specialized in AI & ML",
  },
  {
    quote:
      "I highly recommend Abhishek as an exceptional Frontend Developer at Chanakyans Education Foundation. With expertise in HTML, CSS, JavaScript, React.js, and a strong focus on creating responsive, user-friendly interfaces, Abhishek consistently delivers high-quality work. A great team player and problem-solver, they collaborate effectively and are a valuable asset to any team.",
    name: "Kritika Dewangan",
    title:
      "UI-UX & Full Stack Developer Intern, Chanakyans Education Foundation",
  },
  {
    quote:
      "It is my pleasure to recommend Abhishek, a driven and intellectually curious individual with a remarkable zeal for technology. His analytical acumen, commitment to growth, and ability to approach challenges with ingenuity set him apart. I am confident he will excel and add profound value to any endeavour.",
    name: "Vishal Singh",
    title: "Consultant ,Capgemini",
  },
  {
    quote:
      "I had the privilege of working with ABHISHEK an exceptional full-stack developer with expertise in both front-end and back-end technologies. Their problem-solving skills, technical knowledge, and commitment to delivering high-quality solutions are unmatched. A great team player and communicator, ABHISHEK is an invaluable asset to any development team.",
    name: "Tanay Saksena",
    title: "Sr. Project Manager, Chanakyans Education Foundation",
  },
  {
    quote:
      "Abhishek Singh, my fellow intern at Chanakyans Education Foundation, is an exceptional full stack web developer. During our work on the Careertronics project, he displayed impressive problem-solving skills, strong coding abilities, and a deep understanding of user experience design. His proactive approach and adaptability make him a valuable team member and an asset to any organization.",
    name: "Vatsalya Gautam",
    title: "Full Stack Developer Intern, Chanakyans Education Foundation",
  },
  {
    quote: "Abhishek is an exceptional developer with a keen eye for detail.",
    name: "Divyanshu Goswami",
    title: "Runner-up@ Navonmesh'24  AIML Student @ SSIPMT",
  },
];
export default testimonials;
