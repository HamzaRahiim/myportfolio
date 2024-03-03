import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "heading1",
      title: "Heading1",
      type: "string",
    }),
    defineField({
      name: "heading2",
      title: "Heading2",
      type: "string",
    }),
    defineField({
      name: "sentence",
      title: "Sentence",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
