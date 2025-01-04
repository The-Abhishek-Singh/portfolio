"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Cover } from "@/components/ui/cover";
import ShinyButton from "./ui/shinybutton";
import { Skills } from "../lib/config";
export function LampDemo() {
  return (
    <LampContainer>
      <div className="flex flex-row flex-wrap gap-1 xs:gap-4 mx-auto max-w-3xl items-center justify-center ">
        {Skills.map((skill, index) => (
          <ShinyButton key={index}>{skill}</ShinyButton>
        ))}
      </div>
      <motion.h1 
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-purple-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      ></motion.h1>
    </LampContainer>
  );
}