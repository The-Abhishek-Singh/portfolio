"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "HackerRank",
    link: "https://www.hackerrank.com/profile/abhi120730",
    thumbnail: "/images/hackerrank2.png",
  },

  {
    title: "Leetcode",
    link: "https://leetcode.com/u/Abhishek2494/",
    thumbnail: "/images/leetcode4.png",
  },

  {
    title: "Codechef",
    link: "https://www.codechef.com/users/abhishek9424",
    thumbnail: "/images/codechef3.png",
  },

  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Next UI",
    link: "https://nextui.org",
    thumbnail: "/images/nextui.png",
  },

  {
    title: "GitHub",
    link: "https://github.com/VatsalyaGautam",
    thumbnail: "/images/github4.png",
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/vatsalya17",
    thumbnail: "/images/linkedin4.jpg",
  },
  {
    title: "shadcn/ui",
    link: "https://ui.shadcn.com",
    thumbnail: "/images/shadcn.png",
  },

  {
    title: "VS Code",
    link: "https://code.visualstudio.com/",
    thumbnail: "/images/vscode.png",
  },
  {
    title: "FlavorFusion",
    link: "https://vatsalyagautam.github.io/FlavorFusion/",
    thumbnail: "/images/flavorfusion.png",
  },

  {
    title: "Careertronic",
    link: "https://careertronics.in",
    thumbnail: "/images/careertronic2.png",
  },
  {
    title: "Warp",
    link: "https://warp.dev",
    thumbnail: "/images/warp.png",
  },
  {
    title: "Groove",
    link: "https://vatsalyagautam.github.io/Groove-Box/",
    thumbnail: "/images/groove.png",
  },
  {
    title: "Vite",
    link: "https://vite.dev",
    thumbnail: "/images/vite.png",
  },
];
