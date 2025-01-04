import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className }) => {
  return (
    <div className={cn("grid pt-12  w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  isWidthHalf,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl backdrop-blur-sm",
      "bg-white/80 bg-gradient-to-b from-[#f5f3ff]/50 to-transparent [box-shadow:0_0_0_1px_rgba(107,70,193,0.05),0_2px_4px_rgba(107,70,193,0.05),0_12px_24px_rgba(107,70,193,0.05)]",
      "transform-gpu dark:bg-black/80 dark:bg-gradient-to-b dark:from-[#4c2889]/20 dark:to-transparent dark:[border:1px_solid_rgba(107,70,193,0.1)] dark:[box-shadow:0_-20px_80px_-20px_#6b46c10f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-500 ease-out group-hover:-translate-y-8">
      <Icon className="h-12 w-12 origin-left transform-gpu text-[#6b46c1]/80 dark:text-[#9f7aea]/80 transition-all duration-500 ease-out group-hover:scale-90" />
      <h3 className="text-xl font-semibold text-neutral-950 dark:text-slate-50">
        {name}
      </h3>
      <p className={`max-w-lg ${ isWidthHalf ?'w-[45%]':''} font-openSans h-auto text-neutral-950 dark:text-slate-200`}>{description} </p>
    </div>
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-8 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <a href={href} className="pointer-events-auto flex items-center text-[#6b46c1]/80 dark:text-[#9f7aea]/80 hover:text-[#553c9a] dark:hover:text-[#b794f4] transition-colors duration-300">
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </a>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-500 ease-out group-hover:bg-[#6b46c1]/[.02] group-hover:dark:bg-[#9f7aea]/[.02]" />
  </div>
);

export { BentoCard, BentoGrid };