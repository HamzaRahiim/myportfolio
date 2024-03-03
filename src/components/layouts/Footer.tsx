import Wrapper from "@/components/shared/Wrapper";
import linkedin from "@/assets/images/linkedin.png";
import facebook from "@/assets/images/facebook.png";
import instagram from "@/assets/images/instagram.png";
import Image from "next/image";
import Link from "next/link";
const dataFooter = [
  {
    link: "https://www.linkedin.com/in/work-freelancer",
    icon: linkedin,
  },
  {
    link: "https://www.instagram.com/hmza_rahim",
    icon: instagram,
  },
  {
    link: "https://www.facebook.com/profile.php?id=61551918475504",
    icon: facebook,
  },
];

const Footer = () => {
  return (
    <footer className="mt-12">
      <Wrapper>
        <div className="bg-pink-200 px-2 bottom-0">
          {/* main text */}
          <div className="font-medium text-3xl pt-4">
            <h1>Contact Me:</h1>
          </div>
          {/* contact options */}
          <div className="flex my-3 pl-2 flex-col md:flex-row">
            <div className="flex-1">
              <p>Email: hamzarahim836@gmail.com</p>
              <p>
                Contact No: {"("}+92{")"}-315-0311920
              </p>
            </div>
            <div className="flex-1">
              <div className="flex gap-x-2">
                {dataFooter.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.icon}
                      alt="linkedin"
                      className="w-12 h-12 rounded-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* copy claim */}
          <div className="mb-1">
            <p>© 2024 - All Rights Reserved. Hamza Rahim</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
