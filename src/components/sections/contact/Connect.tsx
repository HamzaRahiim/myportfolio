import Wrapper from "@/components/shared/Wrapper";
import CntData from "@/components/sections/contact/CntData";

const Connect = () => {
  return (
    <section>
      <Wrapper>
        <main className="">
          {/* title */}
          <div className="p-4">
            <h1 className="text-2xl font-medium sm:text-3xl">
              Let&rsquo;s build your dream website:
            </h1>
          </div>
          {/* description */}
          <div className="">
            <p className="text-center text-sm">
              I would love to hear about your vision. Reach out in whichever way
              feels most comfortable!
            </p>
          </div>
          {/* contact list */}
          <CntData />
        </main>
      </Wrapper>
    </section>
  );
};
export default Connect;
