"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { StickyScroll1 } from "./ui/sticky-scroll-reveal1";
import { StickyScroll2 } from "./ui/sticky-scroll-reveal2";
import { Experience, Titles, Subtitles} from "@/lib/config";


export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className=" mx-auto antialiased pt-4 relative">
 
            <div className="p-10">
            <StickyScroll2 content={Experience[1]}  title={Titles[1]} subtitle={Subtitles[1]}/>
            </div>
            <div className="p-10">
             
              <StickyScroll1 content={Experience[0]}  title={Titles[0]} subtitle={Subtitles[0]}/>
            </div>
      </div>
    </TracingBeam>
  );
}
