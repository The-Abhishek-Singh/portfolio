import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid2 = ({ className, children }) => {
  return (
    <div
      className={cn(
        className, "grid grid-cols-1 gridtoota:grid-cols-3 gap-4  bentotoota:gap-12 max-w-7xl mx-auto xs:px-12 gridtoota:px-1 sm:px-4"
        
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem2 = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "row-span-1  rounded-xl group/bento hover:shadow-xl  sm:h-42 md:h-64 transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 min-w-[157px] min-h[200px]",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};