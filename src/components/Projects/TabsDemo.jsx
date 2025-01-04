"use client";

import Image from "next/image";
import { Tabs } from "../ui/Projects/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-950 dark:text-slate-50 dark:bg-gradient-to-br bg-purple-300 dark:from-purple-900 dark:to-violet-950">
          <p className=" font-ubuntu">Home Tab</p>
          <ImageGenerator src="/images/projectHeroHome.png"/>
        </div>
      ),
    },
    {
      title: "About",
      value: "about",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-neutral-950 dark:text-slate-50 dark:bg-gradient-to-br bg-purple-300 dark:from-purple-900 dark:to-violet-950">
          <p className=" font-ubuntu">About tab</p>
          <ImageGenerator src="/images/projectHeroAbout.png"/>
        </div>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  text-neutral-950  dark:text-slate-50 dark:bg-gradient-to-br bg-purple-300 dark:from-purple-900 dark:to-violet-950">
          <p className=" font-ubuntu">Contact tab</p>
          <ImageGenerator src="/images/projectHeroContact.png"/>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  text-neutral-950 dark:text-slate-50 dark:bg-gradient-to-br bg-purple-300 dark:from-purple-900 dark:to-violet-950">
          <p className=" font-ubuntu">Services tab</p>
          <ImageGenerator src="/images/projectHeroServices3.png"/>
        </div>
      ),
    },
    {
      title: "S/W Development and Exports",
      value: "software",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold  text-neutral-950 dark:text-slate-50 dark:bg-gradient-to-br bg-purple-300 dark:from-purple-900 dark:to-violet-950">
          <p className=" font-ubuntu">Software Development tab</p>
          <ImageGenerator src="/images/projectHeroSoftware.png"/>
        </div>
      ),
    },
  ];

  return (
    (<div
      className="h-[27rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const ImageGenerator = ({src}) => {
  return (
    (<Image
      src={src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
