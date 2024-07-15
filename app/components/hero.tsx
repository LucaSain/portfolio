import AnimatedDot from "./animatedDot";

export default function Hero() {
  return (
    <div className="relative z-30 text-4xl font-bold sm:text-5xl md:text-7xl xl:text-8xl">
      Luca Sainenco
      <div className="flex flex-row items-start">
        <AnimatedDot />
        dev
      </div>
    </div>
  );
}
