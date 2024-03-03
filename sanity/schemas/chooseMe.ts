import { defineField, defineType } from "sanity";

export default defineType({
  name: "choose",
  title: "Choose Me",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Points",
      type: "string",
    }),
  ],
});
