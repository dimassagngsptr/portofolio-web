"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10 lg:hidden">
      <div className="w-full h-full flex flex-row items-center lg:justify-between justify-center m-auto lg:px-[10px]">
        <a
          title="dimas logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/signature.png"
            alt="Ibrahim Memon - Developer"
            width={300}
            height={300}
            sizes="100vw"
            className="lg:w-[350px] lg:h-[100px] mt-1"
          />
        </a>

        <div className="flex flex-row gap-5 hidden">
          <div
            onClick={() => window.open("mailto:dimasageng58@gmail.com")}
            className="z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
