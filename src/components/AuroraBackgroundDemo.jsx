"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StarField from "./StarField";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  fadeOut = false,
  ...props
}) => {
  return (
    <motion.main
      className="relative overflow-hidden"
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <StarField
        starCount={4000}
        starColor={[255, 255, 255]}
        speedFactor={0.07}
        backgroundColor="black"
        zIndex={52}
      />
      <div
        className={cn(
          "relative flex flex-col z-[51] h-[100vh] items-center justify-center bg-purple-950 dark:bg-[#0f0014] text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_7%,var(--transparent)_10%,var(--transparent)_12%,rgba(255,255,255,0.08)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_7%,var(--transparent)_10%,var(--transparent)_12%,rgba(0,0,0,0.4)_16%)]
              [--aurora:repeating-linear-gradient(100deg,#4c1d95_10%,#7e22ce_15%,#6b21a8_20%,#581c87_25%,#4c1d95_30%)]
              [background-image:var(--dark-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px] invert dark:invert-0
              after:content-[""] after:absolute after:inset-0
              after:[background-image:var(--dark-gradient),var(--aurora)]
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:animate-aurora after:[background-attachment:fixed]
              after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-70
              will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </motion.main>
  );
};

export function AuroraBackgroundDemo({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isBlurring, setIsBlurring] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start blur effect and fade out 300ms before unmounting
    const effectsTimer = setTimeout(() => {
      setIsBlurring(true);
      setIsFading(true);
    }, 3900);

    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4200);

    return () => {
      clearTimeout(effectsTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (isVisible) {
    return (
      <AuroraBackground fadeOut={isFading}>
        <div className="relative min-h-screen">
          <div className="min-h-screen flex flex-col max-h-full w-full items-center justify-center h-full top-[40%] mt-[-30px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                filter: isBlurring ? "blur(25px)" : "blur(0px)",
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                y: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                filter: { duration: 0.3, ease: "easeInOut" },
              }}
              className="filter font-inter font-normal text-[36px] leading-42 text-center tracking--0.01 bg-gradient-to-b from-white to-white/60 transparent-text bg-clip-text text-[#d2dae4]"
            >
              There's a new <span className="font-yellowTail">Web Dev</span> in
              town.
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                filter: isBlurring ? "blur(25px)" : "blur(0px)",
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.2, ease: "easeOut" },
                y: { duration: 0.8, delay: 1.2, ease: "easeOut" },
                filter: { duration: 0.3, ease: "easeInOut" },
              }}
              className="filter font-inter font-normal text-[36px] leading-42 text-center tracking--0.01 bg-gradient-to-b from-white to-white/60 transparent-text bg-clip-text text-[#d2dae4]"
            >
              Meet Abhishek!
            </motion.h2>
          </div>

          <motion.div
            className="absolute bottom-8 h-auto w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "easeOut",
            }}
          >
            <div className="flex min-h-full max-h-full flex-col justify-center items-center w-full">
              <motion.img
                className="w-32"
                src="/images/yoga.png"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <motion.p
                id="heroBeginp"
                className="font-inter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: "easeOut",
                }}
              >
                ©Abhishek Singh , 2024.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>
    );
  }

  return <>{children}</>;
}
