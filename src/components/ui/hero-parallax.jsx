"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 200]),
    springConfig
  );
  const cardOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-auto pb-4 pt-5 !overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-slate-50 dark:bg-[#0f0017] dark:bg-gradient-to-b dark:from-black dark:to-[#0f0017] "
    >

      
      <meta name="msvalidate.01" content="F499BC814A9FBCC54996A2253A206579" />

      <h1 className="sr-only">Abhishek Singh | Full Stack Developer | MERN, Next.js, Python, AWS</h1>

      
      <div className="pointer-events-none relative z-50">
        <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-openSans bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent flex items-center transition-all duration-300">
            Hey
            <img className="hidden md:block w-20 ml-2" src="./gifs/wave.gif" alt="hi" />
            , I'm<span className="font-yellowTail dark:text-white text-black" >&nbsp;Abhishek</span>
          </h1>
          <h1
            className="text-2xl sm:text-4xl md:text-5xl font-medium font-openSans flex items-center "
            style={{ lineHeight: "1.2" }}
          >
            <span className="bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent transition-all duration-300">
              I'm&nbsp;
            </span>
            <TypeAnimation
              sequence={[
                "a Web Developer",
                2000,
                "a Full Stack Developer",
                2000,
                "a React Developer",
                2000,
                "a Next.js Developer",
                2000,
                "a Tech Innovator",
                2000,
                "a BlockChain Enthusiast",
                2000,
                "a Problem Solver",
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-400 dark:from-purple-400 dark:via-purple-300 dark:to-indigo-200 bg-clip-text text-transparent bg-300% animate-gradient transition-all duration-300 font-serif"
            />
          </h1>
           <h1>
          <p className="max-w-2xl font-openSans text-[0.75rem] sm:text-[0.75rem] md:leading-[2.35rem] md:text-2xl mt-6 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent  transition-all duration-300">
            You&apos;ve stumbled upon my little heaven on the web;
            <br />
      
            Welcome and feel at home!
          </p>
           </h1>
        </div>

        <style jsx global>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient {
            animation: gradient 8s ease infinite;
          }

          .bg-300\% {
            background-size: 300% 300%;
          }
        `}</style>
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity: cardOpacity,
        }}
        className=" z-0 h-[200vh] max-h-[1250px]"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-10">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={product.title}
      className="group/product h-80 w-[25rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-purple-500/50 group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className={`object-cover ${
            product.title === "Vite" || product.title === "VS Code"
              ? "object-center"
              : "object-left-top"
          } absolute h-full w-full inset-0 rounded-xl`}
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-purple-900/90 pointer-events-none rounded-xl"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-purple-200">
        {product.title}
      </h2>
    </motion.div>
  );
};
