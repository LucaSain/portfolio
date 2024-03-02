"use client";
import { motion } from "framer-motion";
export default function AnimatedBg() {
  return (
    <div className="absolute z-0 flex h-screen w-screen items-center justify-center">
      {Array.from(Array(12).keys()).map((x) => {
        return (
          <motion.div
            key={x}
            animate={{ rotate: (x - 19) * 10 }}
            transition={{
              type: "spring",
              duration: 1,
            }}
            className="absolute h-[30%] w-[25%] rounded-full bg-gradient-radial from-base-100 via-base-100 to-neutral shadow-2xl invert sm:h-1/5 sm:w-[52%] md:w-[52%] dark:invert-0 "
          />
        );
      })}
    </div>
  );
}
