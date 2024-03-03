import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { skillData } from "@/lib/db";

const Circle = async () => {
  const skills = await skillData();
  return (
    <main>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 gap-y-6">
        {skills.map((skill: any, index: any) => (
          <div key={index} className="grid justify-center">
            <div>
              <Image
                src={urlForImage(skill.image)}
                alt={skill.title}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full"
                width={100}
                height={100}
              />
            </div>
            <p className="text-center text-lg">{skill.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Circle;
