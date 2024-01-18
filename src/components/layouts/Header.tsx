"use client";
import Image from "next/image";
import Logo from "/public/ca_using-removebg-preview.png";
import Linkcomp from "../shared/Linkcomp";
import Wrapper from "../shared/Wrapper";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="sticky top-0">
      <Wrapper>
        <div className="flex justify-between max-w-screen-xl mx-auto bg-slate-200 px-4 py-2 items-center">
          {/* logo */}
          <div className="text-xl font-bold">
            <Image src={Logo} alt="logo" className="w-36 h-16 object-cover" />
          </div>
          {/* navbar */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li className="hover:border-b border-gray-600 px-3 py-2">
              <Linkcomp text="Home" link="/" />
            </li>
            <li className="hover:border-b border-gray-600 px-3 py-2">
              <Linkcomp text="About" link="/about" />
            </li>
            <li className="hover:border-b border-gray-600 px-3 py-2">
              <Linkcomp text="Projects" link="/projects" />
            </li>
            <li className="bg-green-400 rounded-lg px-3 py-2 text-white hover:bg-green-500">
              <Linkcomp text="Contact Me" link="/contactus" />
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden hover:cursor-pointer">
            <AiOutlineMenu size="20" />
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={
            nav
              ? "md:hidden fixed top-20 ease-in-out duration-500 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* color of navbar and its background on smal screen  */}
          <div
            className={
              nav
                ? "fixed w-screen top-20 h-fit ease-out duration-500 bg-slate-300 flex flex-col"
                : "fixed top-[-100%] left-0 right-0 ease-in duration-500"
            }
          >
            {/* In navbar the close button on smal screen  */}
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg self-start hover:cursor-pointer"
            >
              <AiOutlineClose size="30" />
            </div>
            {/* In navbar the links on smal screen  */}
            <div className="mb-2">
              <ul className="flex flex-col justify-center items-center space-y-4">
                <li className="hover:border-b-2 border-blue-500">
                  <Linkcomp text="Home" link="/" />
                </li>
                <li className="hover:border-b-2 border-blue-500">
                  <Linkcomp text="About" link="/about" />
                </li>
                <li className="hover:border-b-2 border-blue-500">
                  <Linkcomp text="Projects" link="/projects" />
                </li>
                <li className="hover:border-b-2 border-blue-500">
                  <Linkcomp text="Contact Me" link="/contactus" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
export default Header;
