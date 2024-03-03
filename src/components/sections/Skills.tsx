import Wrapper from "@/components/shared/Wrapper";
import Circle from "@/components/shared/Circle";

const Skills = async () => {
  return (
    <section>
      <Wrapper>
        {/* title header */}
        <div className="p-4 my-4">
          <h1 className="font-medium text-3xl">Technical Skills:</h1>
        </div>
        {/* logo with name */}
        <Circle />
      </Wrapper>
    </section>
  );
};
export default Skills;
