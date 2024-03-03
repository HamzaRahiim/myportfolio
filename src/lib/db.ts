import { client } from "../../sanity/lib/client";

export const skillData = async () => {
  const res = await client.fetch(`*[_type == "skill"] | order(_createdAt desc) {
    title,
    image,
  }`);
  return res;
};

export const projectData = async () => {
  const res =
    await client.fetch(`*[_type == "project"] | order(_createdAt desc) {
    title,
    image,
    link,
  }`);
  return res;
};

export const heroData = async () => {
  const res = await client.fetch(`*[_type == "hero"] {
      sentence,
        heading1,
        heading2,
        image,
        description
    }[0]`);
  return res;
};

export const aboutData = async () => {
  const res = await client.fetch(`*[_type == "about"] {
    image,
    description
  }[0]`);
  return res;
};

export const chooseMeData = async () => {
  const res = await client.fetch(`*[_type == "choose"] | order(_createdAt desc){
    description
  }`);
  return res;
};

export const contactsData = async () => {
  const res =
    await client.fetch(`*[_type == "contact"] | order(_createdAt asc) {
    title,
    description,
    buttonText,
    link
  }`);
  return res;
};
