import { chooseMeData } from "@/lib/db";
import { ChooseType } from "@/types";

const ProData = async () => {
  const chooses: ChooseType[] = await chooseMeData();
  return (
    <main>
      {/* heading  */}
      <div>
        <h1 className="text-2xl font-medium mb-6">Why Choose Me:</h1>
      </div>
      {/* main points map function on projectData */}
      <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
        {chooses.map((choose, index) => (
          <div key={index}>
            <h1>
              {index + 1}. {choose.description}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ProData;
