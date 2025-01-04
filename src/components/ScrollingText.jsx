"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../lib/utils";

const ScrollingText = ({ text }) => {
  const element = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = text.split(" ");
  const purpleWords = ["full-stack", "developer"];

  return (
    <p
      ref={element}
      className="font-serif text-[1.25rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[3rem] flex flex-wrap justify-center items-center leading-relaxed text-center font-light px-4 sm:px-6 md:px-8"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        const isPurple = purpleWords.includes(word);
        return (
          <Word
            key={index}
            range={[start, end]}
            progress={scrollYProgress}
            isPurple={isPurple}
            isDarkMode={isDarkMode}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress, isPurple, isDarkMode }, index) => {
  const opacity = useTransform(progress, range, [0.4, 1]);
  const color = useTransform(
    progress,
    range,
    isPurple 
      ? ["#6B46C1", "#B066FF"] // Purple gradient stays same for both modes
      : isDarkMode 
        ? ["#4b4b4b", "#FFFFFF"] // Original dark mode colors
        : ["#4b4b4b", "#1a1a1a"] // Light mode colors
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className={cn(
        "mr-3 relative text-center font-light transition-colors duration-200"
      )}
      key={index}
    >
      {children}
    </motion.span>
  );
};

export default ScrollingText;