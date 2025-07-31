import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-blue-500 flex items-center justify-center">
      <span className="text-8xl wrap-break-word w-2xl text-white">
        SSR. Frontend Developer
      </span>
      <div className="relative w-[500px] h-[500px]">
        <Image src="/person.png" alt="person" fill className=" object-cover" />
      </div>
    </div>
  );
};

export default Hero;
