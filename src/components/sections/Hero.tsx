import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import HeroPosterr from "@/assets/images/hamzarahim.png";
import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section className="h-full flex justify-center">
      <Wrapper>
        <div className="flex flex-col justify-center items-center md:flex-row h-full mt-4 md:m-0">
          {/* left side */}
          <div className="flex-1 pl-8 sm:order-first mt-2 md:m-0">
            <p className="max-w-96 text-slate-600 text-lg mt-4">
              Hello Everyone, I am
            </p>
            <h1 className="font-bold text-4xl sm:text-6xl">Hamza Rahim</h1>
            <h3 className="font-semibold text-3xl py-4 max-w-[500px]">
              Front-end Developer Using{" "}
              <span className="text-[#166534]">NextJs</span> &{" "}
              <span className="text-[#166534]">React</span>
            </h3>
            <p className="max-w-[500px] text-gray-600">
              Your website won&apos;t just look good, it will dance across any
              screen.
            </p>
            <button className="py-4 my-2 hover:scale-105 duration-300">
              <Button link="/about" text="Learn More" />
            </button>
          </div>
          {/* right side */}
          <div className="md:flex-1 mt-2 order-first">
            <Image
              src={HeroPosterr}
              alt="Profile picure"
              className="mx-auto md:w-96 md:h-[500px] border-green-900 border-4 object-cover rounded-full w-60 h-60 sm:rounded-none sm:border-none"
            />
          </div>
        </div>
        <div className="relative"></div>
        <div className="w-1/3 h-1/2 rounded-full absolute top-44 -z-10 right-0 bg-opacity-60 blur-3xl bg-gradient-to-r from-green-200 to-slate-200"></div>
        <div className="w-1/3 h-1/2 rounded-full absolute top-96 -z-10 left-0 bg-opacity-70 blur-3xl bg-gradient-to-r from-green-200 to-green-100"></div>
      </Wrapper>
    </section>
  );
};

export default Hero;
