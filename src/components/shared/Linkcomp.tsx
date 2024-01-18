import Link from "next/link";

const Linkcomp = ({ text, link }: { text: string; link: string }) => {
  return <Link href={link}>{text}</Link>;
};
export default Linkcomp;
