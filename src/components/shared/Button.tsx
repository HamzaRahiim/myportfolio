import Link from "next/link";

const Button = ({
  text,
  link,
  target,
}: {
  text: string;
  link: string;
  target?: string;
}) => {
  return (
    <Link
      href={link}
      className="px-4 py-3 bg-[#15803d] rounded-full text-white font-bold"
      target={target}
    >
      {text}
    </Link>
  );
};
export default Button;
