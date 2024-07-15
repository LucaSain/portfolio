"use client";
import { motion } from "framer-motion";

interface props {
  text: String;
}

export default function AnimatedTitle({ text }: props) {
  return (
    <motion.div
      className="flex h-max w-max items-center justify-center rounded-lg bg-green-800 bg-clip-text py-3 text-transparent "
      animate={{
        backgroundImage: [
          "radial-gradient(at -0% -10% ,#833ab4, #fd1d1d, #6d32fc, #fcb045)",
          "radial-gradient(at -10% -50% ,#833ab4,#fcb045, #fd1d1d, #6d32fc)",
          //     "radial-gradient(at 100% 0% ,#833ab4, #fd1d1d, #6d32fc, #fcb045)",
          //   "radial-gradient(at 100% 100% ,#833ab4, #fcb045, #fd1d1d, #6d32fc)",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
      }}
    >
      <div className="inline-block h-max">{text}</div>
    </motion.div>
  );
}
