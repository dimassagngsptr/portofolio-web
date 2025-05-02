"use client"
import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/isi.jpg"}
              height={30}
              width={30}
              alt={"Ibrahim Memon - UX Experience"}
              className="rounded-full"
            />
            <p className="text-gray-300 ">
              <span className="font-semibold cursor-pointer" onClick={() => window.open("https://ihsansolusi.co.id/")}>PT Ihsan Solusi Informatika /</span> Backend Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            2024 - Present, Bandung
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          Currently, I am working at PT Ihsan Solusi Informatika as a Backend Developer.
          Ihsan Solusi Informatika is a software house company that focuses on developing banking products
          and has over 20 years of experience in building
          Sharia banking systems.
          <br />
          <br />
          In my role, I am responsible for developing and maintaining backend services using Golang,
          implementing a microservices architecture to ensure the system is scalable, efficient,
          and easy to maintain. I collaborate closely with cross-functional teams to design APIs,
          handle database integrations, and ensure high performance and reliability of services across various environments.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-black/50 transition duration-700">
            Golang
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max  hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-black/50 transition duration-700">
            gRpc
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max  hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-black/50 transition duration-700">
            Microservices
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max  hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-black/50 transition duration-700">
            GraphQL
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max  hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-black/50 transition duration-700">
            Oracle
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max  hover:text-black hover:bg-gradient-to-r hover:from-white hover:to-black/50 transition duration-700">
            Docker
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
