import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import poster from "@/assets/images/nextjs-poster.png";
import Button from "@/components/shared/Button";

const Details = () => {
  return (
    <section>
      {/* poster  */}
      <div className="w-full md:h-72 sm:h-48 h-32">
        <Image src={poster} alt="my poster" className="w-full object-cover" />
      </div>
      <Wrapper>
        <div className="flex mt-3 flex-col md:flex-row">
          {/* About me left */}
          <div className="flex-1">
            <h1 className="font-medium text-3xl">About Me:</h1>
          </div>
          {/* About me right */}
          <div className="flex-1">
            <p className="text-sm">
              I am a Freelance Front-End Developer based in Pakistan. Armed with
              expertise in Next.js, React, and Node.js, I breathe life into
              websites with a blend of design finesse and functional prowess.
              With a solid foundation in science from Islamia College and
              currently pursuing a BBIT degree at the Virtual University of
              Pakistan, I blend academic knowledge with practical skills gained
              through freelancing and ongoing learning. Whether it&apos;s
              crafting a new website or revamping an existing one, I am here to
              transform your vision into a digital reality.
              <br /> Currently, I am furthering my tech passion through hands-on
              learning at PIAIC and refining my skills as a{" "}
              <span className="font-sans font-medium text-lg text-[#166534]">
                Certified Applied Cloud Generative AI Engineer
              </span>
              .
            </p>
            <button className="my-6 hover:scale-105 duration-300">
              <Button text="Contact Me" link="/contactus" />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Details;
