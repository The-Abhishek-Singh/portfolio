"use client";
import React from "react";
import { PinContainer } from "../ui/Contact/3d-pin";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function AnimatedPinDemo({ title, subtitle, linkname,imagelink,isMail, href,icon:Icon }) {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center ">
      <PinContainer title={linkname} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold flex flex-row justify-between text-base text-neutral-900 dark:text-slate-100">
            {title}
            <Icon size={24}/>
          </h3>
          
          
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{subtitle}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <img src={imagelink} className={`w-full rounded-lg ${isMail?'object-cover':''}`}/>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
