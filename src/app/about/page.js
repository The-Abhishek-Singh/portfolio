"use client";
import { TimelineDemo } from "@/components/TimelineDemo";
import { VortexDemo } from "@/components/VortexDemo";
import React from "react";
import { useState, useEffect } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Nav from "@/components/Nav";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
// import { BentoDemo } from "@/components/BentoDemo";
// import SparklesText from "@/components/ui/sparkles-text";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";

const Page = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null; // or a loading placeholder
  }
  return (
    <>
      <Nav />
      <ScrollProgress />
      <VortexDemo />

      <div className="bg-gradient-to-b from-[rgb(251,252,253)] to-slate-50 dark:bg-gradient-to-b dark:from-black/70 dark:to-[#0f0017]">
        <div className=" md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col ">
          <div className="flex flex-col    gap-36 pt-24">
            <div className="flex flex-col">
              <AnimatedSection>
                <SectionHeading
                  title="THE JOURNEY"
                  subtitle=" Humble beginnings to mastering tech: my evolving path."
                />
              </AnimatedSection>

              <div className="h-auto w-full mt-16">
                <AnimatedSection>
                  <TimelineDemo />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-slate-50 dark:bg-[#0f0017]  dark:bg-gradient-to-b dark:from-[#0f0017] dark:to-[#000012] w-full h-full ${
          theme == "light" ? "pb-16" : "pb-12"
        }`}
      >
        <div className=" px-5 md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pt-36 ">
          <AnimatedSection>
            <SectionHeading
              title="WHAT I BRING TO THE TABLE"
              subtitle="apart from a positive attitude and polite demeanour"
            />
            <AnimatedTestimonialsDemo />
          </AnimatedSection>
        </div>
      </div>

      {/* <div className="bg-slate-50 dark:bg-[#0f0017] dark:bg-gradient-to-b dark:from-[#0f0017] dark:to-[#000012] w-full h-full "> 
        <div className=" px-5 md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col pt-36 pb-12">
          <AnimatedSection>
            <SectionHeading
              title="COLLABORATE"
              subtitle={
                <>
                  Let&apos;s craft <SparklesText text="&nbsp; magic &nbsp;" />,
                  together.
                </>
              }
              isDiv="1"
              isFlex="1"
            />

            <BentoDemo />
          </AnimatedSection>
        </div>
      </div> */}

      <div className=" relative dark:bg-[#020013] ">
        <StarField
          starCount={2500}
          starColor={[255, 255, 255]}
          speedFactor={0.07}
          backgroundColor="black"
        />
        <div className=" dark:bg-[#000013] overflow-y-hidden overflow-x-hidden overflow-y-clip overflow-x-clip mx-auto flex flex-col ">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Page;
