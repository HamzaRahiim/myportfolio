import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="font-sans font-medium text-lg text-[#166534]">
        {children}
      </strong>
    ),
  },
};
