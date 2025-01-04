"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex relative  max-h-[429.44px] min-h-[429.44px] h-[60vh] flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0f0017] w-full rounded-md z-0",
        className
      )}
    >
      <div className="hidden sm:flex relative  w-full items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="hidden sm:block absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="hidden sm:block absolute w-[100%] left-0  bg-slate-50 dark:bg-[#0f0017] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="hidden sm:block absolute w-40 h-[100%] left-0  bg-slate-50 dark:bg-[#0f0017] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="hidden sm:block absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="hidden sm:block absolute w-40 h-[100%] right-0  bg-slate-50 dark:bg-[#0f0017] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="hidden sm:block absolute w-[100%] right-0  bg-slate-50 dark:bg-[#0f0017] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className= "hidden sm:block absolute top-1/2 h-48 w-full translate-y-12  bg-slate-50 dark:bg-[#0f0017] blur-2xl"></div>
        <div className="hidden sm:block  absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="hidden sm:block  absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="hidden sm:block absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="hidden sm:block absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400"
        ></motion.div>

        <div className="hidden sm:block absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-50 dark:bg-[#0f0017]"></div>
      </div>
      <div className="relative z-50 flex -translate-y-4 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};