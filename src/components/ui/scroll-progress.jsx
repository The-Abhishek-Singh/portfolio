import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress({ className }) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-[65px] z-[1000] h-1 origin-left bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}