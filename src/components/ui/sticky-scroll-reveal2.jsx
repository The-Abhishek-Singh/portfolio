"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
export const StickyScroll2 = ({
  content,
  contentClassName,
  title,
  subtitle,
  idx,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });
  const { theme } = useTheme();
  // Extended background colors for 6 appearances
   // Separate light and dark mode colors
   const lightModeColors = [
    "rgb(234, 218, 240)" /* Soft light purple */,
    "rgb(238, 225, 245)" /* Light purple with more white */,
    "rgb(240, 230, 245)" /* Very light purple with a subtle depth */,
    "rgb(243, 237, 245)" /* Soft off-white with a light purple tint */,
  ];
  const darkModeColors = [
    "rgb(20, 0, 30)" /* Darker purple */,
    "rgb(15, 0, 25)" /* Deep purple */,
    "rgb(10, 0, 20)" /* Very dark purple */,
    "rgb(5, 0, 10)" /* Almost black with purple tint */,  
  ];

  const [backgroundColorState, setBackgroundColorState] = useState(darkModeColors[0]);
  
    useEffect(() => {
      const colors = theme === 'dark' ? darkModeColors : lightModeColors;
      setBackgroundColorState(colors[activeCard % colors.length]);
    }, [activeCard, theme]);
  // Extended gradients with red-white as first
  const linearGradients = [
      "linear-gradient(to bottom right, var(--cyan-500), var(--indigo-300))", // Subtle teal gradient
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
      "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
      "linear-gradient(to bottom right, var(--violet-500), var(--purple-500))",
      "linear-gradient(to bottom right, var(--blue-500), var(--teal-500))",
  
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-slate-100 font-serif mb-3 px-4 lg:px-14">
        {title}
      </h1>
      <h1 className="text-md sm:text-lg lg:text-xl font-bold text-purple-400  font-serif mb-7 px-4 lg:px-14">
        {subtitle}
      </h1>
    
      
      
     
      <motion.div
        animate={{
          backgroundColor: backgroundColorState
        }}
        className="h-[33rem] min-w-[12rem]
    max-h-[20rem] md:max-h-full  overflow-y-auto flex flex-col lg:flex-row justify-center relative lg:space-x-10 rounded-md p-6 lg:p-10"
        ref={ref}>
        {/* Text Section */}
       
        
        <div className="relative flex items-start px-4 lg:px-6">
          <div className="max-w-full lg:max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="mb-16 mt-8">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-slate-100 font-serif">
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-sm sm:text-base lg:text-lg text-neutral-700 dark:text-slate-300 max-w-full lg:max-w-sm mt-4 font-openSans">
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-20 lg:h-40" />
          </div>
        </div>
        {/* Card Section */}
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-48 sm:h-60 w-full sm:w-64 lg:w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}>
          {content[activeCard]?.content ?? null}
        </div>
        
      </motion.div>

   </div>
  );
};