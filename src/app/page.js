"use client";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Nav from "@/components/Nav";
import { LampDemo } from "@/components/LampDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import GithubContributions from "@/components/GithubContributions";
import ScrollingText from "@/components/ScrollingText";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import SectionHeading from "@/components/SectionHeading";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { useState,useEffect } from "react";
// import ShootingStars from "@/components/ui/shooting-stars";
// import { StarsBackground } from "@/components/ui/stars-background";
import { useTheme } from "next-themes";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const { theme, setTheme } = useTheme();
 
  return (
    <>
      <AuroraBackgroundDemo>
        <Nav className="absolute top-0" />
        <ScrollProgress />
        <AnimatedSection>
          <HeroParallaxDemo />
        </AnimatedSection>

        <div className="bg-slate-50 dark:bg-[#0f0017]">
          <div className="bg-slate-50 dark:bg-[#0f0017]  px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
            <div className="flex flex-col dark:bg-[#0f0017]  gap-36">
              <div className="flex flex-row justify-center items-center bg-slate-50 dark:bg-[#0f0017] ">
                <GithubContributions />
              </div>
              <ScrollingText
                className="font-thin"
                text="I'm a driven full-stack developer with a flair for creativity and an unwavering passion for innovation. I thrive in the ever-evolving world of web development, where creativity meets innovation, and I’m always chasing the next big challenge."
              />
              <div>
                <SectionHeading
                  title="EXPERIENCES"
                  subtitle="A curated chronicle of professional engagements"
                />
                <TracingBeamDemo />
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-[#0f0017]   md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
            <div className="flex flex-col dark:bg-[#0f0017]  gap-36">
              <div className="flex flex-col ">
                <div className="mb-0 sm:mb-12 mt-36">
                  <SectionHeading
                    title="SKILLS"
                    subtitle="My key expertises and technical proficiencies"
                  />
                </div>

                <LampDemo />
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-slate-50 dark:bg-[#0f0017] dark:bg-gradient-to-b dark:from-[#0f0017] dark:to-[#000012] ${theme=="light"?"pb-16":""}`}>
          <div className="bg-slate-50 dark:bg-[#0f0017] dark:bg-gradient-to-b dark:from-[#0f0017] dark:to-[#000012] px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pb-12">
            <SectionHeading
              title="TESTIMONIALS"
              subtitle="Recommendations from people I know and work with"
            />
            <InfiniteMovingCardsDemo />
          </div>
        </div>
        
        <div className=" bg-slate-50 relative dark:bg-[#020013] ">
          <StarField
            starCount={2500}
            starColor={[255, 255, 255]}
            speedFactor={0.07}
            backgroundColor="black"
          />
          <div className="bg-slate-50 dark:bg-[#000013] overflow-y-hidden overflow-x-hidden overflow-y-clip overflow-x-clip mx-auto flex flex-col ">
            <Footer />
          </div>
        </div>
   
      </AuroraBackgroundDemo>
    </>
  );

  {
    /* <div className="bg-slate-50 dark:bg-[#0f0017] px-5  md:max-w-5xl lg:max-w-6xl mt-12 mx-auto  flex flex-col ">
          <div className="flex flex-col dark:bg-[#0f0017]  gap-36">
            <div className="mb-0 justify-center items-center flex">
              
            </div>
          </div>
        </div> */
  }
}
