import { projectData } from "@/lib/db";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";

// components reusable
const Boxes = async () => {
  const projects: Project[] = await projectData();
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between hover:cursor-pointer">
        {projects.map((project, index) => (
          <div className="px-2 hover:scale-105 duration-300" key={index}>
            <Link href={`${project.link}`} target="_blank">
              <Image
                src={urlForImage(project.image)}
                alt={project.title}
                width={230}
                height={180}
                className="rounded-lg border border-teal-950 mt-2 md:w-96 md:h-72"
              />
              <p className="text-center mb-4 pt-2">{project.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
