"use client";
import { motion } from "framer-motion";

export default function AnimatedDot() {
  return (
    <motion.div
      className="rounded-lg bg-green-800 bg-clip-text text-transparent"
      animate={{
        backgroundImage: [
          "radial-gradient(at 0% 0% ,#833ab4, #fd1d1d, #6d32fc, #fcb045)",
          "radial-gradient(at 0% 100% ,#833ab4,#fcb045, #fd1d1d, #6d32fc)",
          "radial-gradient(at 100% 0% ,#833ab4, #fd1d1d, #6d32fc, #fcb045)",
          "radial-gradient(at 100% 100% ,#833ab4, #fcb045, #fd1d1d, #6d32fc)",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
      }}
    >
      <div>.</div>
    </motion.div>
  );
}
