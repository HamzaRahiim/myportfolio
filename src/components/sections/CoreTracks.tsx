import Wrapper from "@/components/shared/Wrapper";
import Boxes from "@/components/shared/Boxes";
import Button from "@/components/shared/Button";

const CoreTracks = () => {
  return (
    <section className="mt-16">
      <Wrapper>
        <div className="flex flex-col px-4">
          {/* Title part */}
          <div>
            <h1 className="font-medium text-3xl mb-4">Latest Projects:</h1>
          </div>
          {/* Projects Picture */}
          <Boxes />
          {/* Button for contact page  */}
          <button className="mt-4 ml-6 self-start hover:scale-105 duration-300">
            <Button text="Contact Me" link="/contact" />
          </button>
        </div>
        <div className="relative"></div>
        <div className="w-1/3 h-1/2 rounded-full absolute top-[1000px] -z-10 left-0 bg-opacity-70 blur-3xl bg-gradient-to-r from-green-200 to-green-100"></div>
      </Wrapper>
    </section>
  );
};
export default CoreTracks;
