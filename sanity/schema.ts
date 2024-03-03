import { type SchemaTypeDefinition } from "sanity";
import skills from "./schemas/skills";
import project from "./schemas/project";
import hero from "./schemas/hero";
import about from "./schemas/about";
import chooseMe from "./schemas/chooseMe";
import contact from "./schemas/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, project, hero, about, chooseMe, contact],
};
