"use client";
import React from "react";
import Nav from "@/components/Nav";
import { VortexDemo } from "@/components/VortexDemo";
import { GoogleGeminiEffectDemo } from "@/components/Projects/GoogleGeminiEffectDemo";
import { Compare } from "@/components/ui/Projects/compare";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { TabsDemo } from "@/components/Projects/TabsDemo";
import { CardHoverEffectDemo } from "@/components/Projects/CardHoverEffectDemo";
function page() {
  return (
    <>
      <Nav />
      <VortexDemo
        title="Crafting Digital Realities"
        subtitle="Witness the evolution of ideas into impactful creations—one line of code at a time."
      />
      <div className=" bg-gradient-to-b w-full from-[rgb(251,252,253)] to-slate-50 dark:bg-gradient-to-b dark:from-black/70 dark:to-[#0f0017]">
        <div className="  md:max-w-5xl lg:max-w-6xl px-5 mx-auto flex flex-col gap-64 pt-28 w-full ">
          <div className="flex flex-col gap-16">
            <SectionHeading
              title="ON MY DESK RIGHT NOW"
              subtitle="Currently I'm building the main website of Careertronic Global Pvt. Ltd."
            />
            <TabsDemo />
          </div>
          <div className="flex flex-col gap-32">
            <div className="flex flex-col gap-16">
              <SectionHeading
                title="PROJECTS"
                subtitle="Crafting each project like an artisan shaping their masterpiece"
              />
              <CardHoverEffectDemo />
            </div>
            <div className="flex flex-col gap-16">
              <SectionHeading
                title="CODE MATTERS"
                subtitle="From Chaos to Clarity : Say Goodbye to the Un's"
              />
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800  px-4 pb-4">
                  <div className="flex justify-around w-full my-8 h-12">
                    <div className="flex flex-col w-1/2 justify-center items-center p-2">
                      <h3 className="font-semibold text-lg md:text-2xl font-serif dark:text-slate-50 text-neutral-950 text-center">
                        Others&apos; code
                      </h3>
                      <p className="text-md md:text-lg font-openSans dark:text-slate-200 text-neutral-800 text-center">
                        Unorganised, Unmaintainable{" "}
                      </p>
                    </div>
                    <div className="flex flex-col w-1/2 justify-center items-center p-2">
                      <h3 className="font-semibold text-lg md:text-2xl font-serif dark:text-slate-50 text-neutral-950 text-center">
                        My code
                      </h3>
                      <p className="text-md md:text-lg font-openSans dark:text-slate-200 text-neutral-800 text-center">
                        <s>Un</s> organised, <s>Un</s> maintainable
                      </p>
                    </div>
                  </div>
                  <Compare
                    firstImage="/images/longcode1.png"
                    secondImage="/images/cleancode1.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="w-full h-[20rem] sm:h-[31rem] sm:w-[31rem] md:h-[40rem] md:w-[40rem]"
                    slideMode="hover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-[#0f0017] dark:bg-gradient-to-b dark:from-[#0f0017] dark:to-[#000012] ">
        <GoogleGeminiEffectDemo />
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
}

export default page;
