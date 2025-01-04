"use client";
import React from "react";
import Nav from "@/components/Nav";
import { VortexDemo } from "@/components/VortexDemo";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeamsDemo";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { BentoDemo } from "@/components/Contact/BentoDemo";
import SparklesText from "@/components/ui/sparkles-text";
import Footer from "@/components/Footer";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/Contact/text-reveal-card";
import StarField from "@/components/StarField";
import { BorderBeam } from "@/components/ui/border-beam";
// import { FeaturesSectionDemo } from '@/components/Contact/FeaturesSectionDemo';
export const page = () => {
  return (
    <>
      <Nav />
      <VortexDemo />

      <div className="bg-gradient-to-b w-full from-[rgb(251,252,253)] to-slate-50 dark:bg-gradient-to-b dark:from-black/70 dark:via-[rgb(15,0,27)] dark:to-black">
        <div className=" md:max-w-5xl lg:max-w-6xl mx-auto min-h-14 flex flex-col p-4 xs:p-8 gridtoota:p-20">
          <div className=" w-full h-full ">
            <div className=" px-5 md:max-w-3xl lg:max-w-4xl mx-auto flex flex-col pt-24 ">
              <AnimatedSection>
                <SectionHeading
                  title="COLLABORATE"
                  subtitle={
                    <>
                      Let&apos;s craft{" "}
                      <SparklesText text="&nbsp; magic &nbsp;" />, together.
                    </>
                  }
                  isDiv="1"
                  isFlex="1"
                />

                <BentoDemo />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      <BackgroundBeamsDemo />
      <div className="bg-gradient-to-b w-full from-[rgb(251,252,253)] to-slate-50 dark:bg-gradient-to-b dark:from-black dark:to-[#000012]">
        <div className=" md:max-w-5xl lg:max-w-6xl mx-auto min-h-14 flex flex-row justify-center align-center py-20 px-8 cardtoota:pb-16 cardtoota:pt-2 cardtoota:px-2">
          <TextRevealCard
            className="font-serif text-black dark:text-white"
            text="You know the business"
            revealText="I know the chemistry "
          >
            <TextRevealCardTitle>
              Sometimes, you just need to see it.
            </TextRevealCardTitle>
            <TextRevealCardDescription className="font-openSans">
              but I bet you won&apos;t have to, once you hire me!
            </TextRevealCardDescription>
            <BorderBeam size={250} duration={12} delay={9} />
          </TextRevealCard>
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
    </>
  );
};

export default page;
