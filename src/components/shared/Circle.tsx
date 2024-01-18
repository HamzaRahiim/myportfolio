import nextjs from "@/assets/images/nextjsicon.png";
import react from "@/assets/images/reactjs.jpeg";
import nodejs from "@/assets/images/nodejs.jpg";
import tailwind from "@/assets/images/tailwindcss.jpeg";
import typescript from "@/assets/images/TS-logo.png";
import javascript from "@/assets/images/JS-logo.png";
import git from "@/assets/images/git-logo.jpeg";
import github from "@/assets/images/GitHub-Logo.png";
import Image from "next/image";
const dataOfSkills = [
  {
    logo: nextjs,
    name: "Nextjs",
  },
  {
    logo: react,
    name: "React",
  },
  {
    logo: nodejs,
    name: "Nodejs",
  },
  {
    logo: tailwind,
    name: "Tailwindcss",
  },
  {
    logo: typescript,
    name: "Typescript",
  },
  {
    logo: javascript,
    name: "Javascript",
  },
  {
    logo: git,
    name: "Git",
  },
  {
    logo: github,
    name: "Github",
  },
];

const Circle = () => {
  return (
    <main>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 gap-y-6">
        {dataOfSkills.map((skill) => (
          <div key={skill.name} className="grid justify-center">
            <div>
              <Image
                src={skill.logo}
                alt={skill.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              />
            </div>
            <p className="text-center text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Circle;
