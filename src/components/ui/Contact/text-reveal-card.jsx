"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const [widthPercentage, setWidthPercentage] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const updateDimensions = () => {
      if (cardRef.current) {
        const { left, width } = cardRef.current.getBoundingClientRect();
        setDimensions({ width, left });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();
    if (!isMounted) return;

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - dimensions.left;
      setWidthPercentage((relativeX / dimensions.width) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event) {
    event.preventDefault();
    if (!isMounted) return;

    const clientX = event.touches[0].clientX;
    if (cardRef.current) {
      const relativeX = clientX - dimensions.left;
      setWidthPercentage((relativeX / dimensions.width) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-purple-300 dark:bg-[rgb(17,9,30)] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden",
        className
      )}>
      {children}
      <div className="h-40 relative flex items-center overflow-hidden">
        {isMounted && (
          <>
            <motion.div
              style={{
                width: "100%",
              }}
              animate={
                isMouseOver
                  ? {
                      opacity: widthPercentage > 0 ? 1 : 0,
                      clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                    }
                  : {
                      clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                    }
              }
              transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
              className="absolute  bg-purple-300 dark:bg-[rgb(17,9,30)]  z-20 will-change-transform">
              <p
                style={{
                  textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                }}
                className="xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] py-10 font-bold  bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-white bg-gradient-to-b from-neutral-800 to-neutral-600">
                {revealText}
              </p>
            </motion.div>
            <motion.div
              animate={{
                left: `${widthPercentage}%`,
                rotate: `${rotateDeg}deg`,
                opacity: widthPercentage > 0 ? 1 : 0,
              }}
              transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
              className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform">
            </motion.div>
          </>
        )}

        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-neutral-200 dark:bg-[#323238]">
            {text}
          </p>
          {isMounted && <MemoizedStars />}
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className
}) => {
  return (
    <h2 className={twMerge("text-black dark:text-white text-3xl mb-2 font-ysabeau", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className
}) => {
  return <p className={twMerge("text-black/80 dark:text-[#a9a9a9] text-sm", className)}>{children}</p>;
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);