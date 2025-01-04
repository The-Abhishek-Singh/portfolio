import { HoverEffect } from "../ui/Projects/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Nike Shoes Online Store UI Clone",
    description:
      "This responsive front-end clone of Nike's online store highlights dynamic design, intuitive navigation, and my expertise in HTML, CSS, JavaScript, and responsive design.",
    link: "https://github.com/The-Abhishek-Singh/Nike_Shoes_website",
  },
  {
    title: "Two Good Co. Website Clone",
    description:
      "This project replicates the Two Good Co. website, showcasing clean layouts, responsive design, and smooth user interactions using HTML, CSS, JavaScript, and modern UI techniques.",
    link: "https://github.com/The-Abhishek-Singh/two_good_.co",
  },
  {
    title: "GitReload",
    description:
      " A GitHub-themed Chrome extension crafted for fun, designed to refresh your profile page periodically, adding a creative twist to monitoring activity and engagement.",
    link: "null",
  },
  {
    title: "Minimalistic Portfolio",
    description:
      "A sleek single-page portfolio built with Next.js, featuring seamless animations, intuitive light and dark modes, and a design that emphasizes simplicity and elegance.",
    link: "nothing",
  },
  {
    title: "Quantum Lab Landing Page",
    description:
      "A visually stunning landing page for a quantum lab, built with Next.js and Three.js, featuring mesmerizing animations that bring the world of quantum science to life.",
    link: "A visually stunning landing page for a quantum lab, built with Next.js and Three.js, featuring mesmerizing animations that bring the world of quantum science to life.",
  },
  {
    title: "Main Portfolio",
    description: "The one you're exploring now :)",
    link: "/home",
  },
];
