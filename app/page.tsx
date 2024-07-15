import Image from "next/image";
import AnimatedBg from "./components/animatedBg";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="z-0 flex h-screen w-screen max-w-full items-center justify-center overflow-hidden">
      <AnimatedBg />
      <Hero />
    </div>
  );
}
