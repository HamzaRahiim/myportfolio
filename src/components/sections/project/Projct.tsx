import Boxes from "@/components/shared/Boxes";
import Wrapper from "@/components/shared/Wrapper";
import ProData from "@/components/sections/project/ProData";

const Projct = () => {
  return (
    <main>
      <Wrapper>
        {/* topic heading */}
        <div className="my-6">
          <h1 className="text-3xl font-medium">Projects:</h1>
        </div>
        {/* components that contains data of proejects */}
        <div className="px-4">
          <Boxes />
        </div>
        {/* Contains sections of Why  */}
        <div>
          <ProData />
        </div>
      </Wrapper>
    </main>
  );
};
export default Projct;
