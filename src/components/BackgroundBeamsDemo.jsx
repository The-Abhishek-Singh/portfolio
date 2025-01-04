"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { AnimatedPinDemo } from "./Contact/AnimatedPinDemo";
import SectionHeading from "./SectionHeading";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { BentoGridDemo } from "./Contact/BentoGridDemo";
export function BackgroundBeamsDemo() {
  return (
    <div className="bg-slate-50 dark:bg-black height-auto">
      <div className="h-[100%] cardtoota:h-[50rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="hidden cardtoota:flex cardtoota:absolute top-[10%]  justify-center w-full">
          <SectionHeading
            title="CONTACT ME"
            subtitle="Let's connect and create something amazing together."
            isDiv={true}
          />
        </div>
        <div className="md:max-w-5xl lg:max-w-6xl mx-auto px-5 h-4/5">
          <div className="hidden  cardtoota:flex flex-row items-center justify-center  z-10 absolute top-[30%] left-[50%] translate-x-[-50%]">
            <AnimatedPinDemo
              title="LinkedIn"
              icon={Linkedin}
              imagelink="/images/AbhishekLinkding.png"
              subtitle="Connect with me on LinkedIn"
              linkname="www.linkedin.com/in/abhisheksingh2494/"
              href="https://www.linkedin.com/in/abhisheksingh2494/"
            />
            <AnimatedPinDemo
              title="Gmail"
              icon={Mail}
              imagelink="/images/outlook.png"
              subtitle="Reach out to me via email"
              linkname="abhi120730@gmail.com"
              href="mailto:abhi120730@gmail.com"
              isMail={true}
            />

            <AnimatedPinDemo
              title="Twitter"
              icon={Twitter}
              imagelink="/images/AbhishekX.png"
              subtitle="Follow me on Twitter, now X"
              linkname="x.com/i_amAbhishek_07"
              href="https://x.com/i_amAbhishek_07"
            />
          </div>
          <div className="w-full flex cardtoota:hidden flex-col items-center justify-around relative z-10 h-full">
            <div className="flex flex-col justify-around h-full">
              <SectionHeading
                title="CONTACT ME"
                subtitle="Let's connect and create something amazing together."
                isDiv={true}
                classes={"pt-28 pb-16"}
              />
              <BentoGridDemo />
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
