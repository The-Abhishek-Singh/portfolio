"use client";
import React from "react";
import { ContainerScroll } from "../ui/Projects/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            careertronics.in
              <span className="text-xl md:text-2xl font-bold mt-1 leading-none">
               
              </span>
            </h1>
          </>
        }>
        <Image
          src={`/images/projectHeroHome.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
