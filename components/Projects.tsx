import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  const mockProject = [
    {
      link: "https://food-recipe-dimas.vercel.app/",
      repository: "https://github.com/dimassagngsptr/food-recipe",
      title: "Food Recipe",
      mock: "/mock-food.png",
      desc: "Food Recipe is a food recipe search application that can be accessed by anyone, this application is built using Next.Js with and Tailwind CSS framework as a page design support. "
    },
    {
      link: "https://innovation-blanja.vercel.app/",
      repository: "https://github.com/dimassagngsptr/blanja-kelompok-1",
      title: "Blanja",
      mock: "/mock-blanja.png",
      desc: "Blanja is an e-commerce application designed for finding and selling various kinds of items. The apps is developed to provide users with recommended products to their preferences. "
    },
    {
      link: "https://dimas-peworld.vercel.app/",
      repository: "https://github.com/dimassagngsptr/Peworld",
      title: "Peworld",
      mock: "/mock-peworld.png",
      desc: "Peworld is a recruiter application designed for finding talent for various job positions. The application is developed using React.js with Tailwind CSS framework for page design."
    },
    {
      link: "https://kasir-wheat.vercel.app/",
      repository: "https://github.com/dimassagngsptr/KASIR-POS",
      title: "Kasir",
      mock: "/mock-kasir.png",
      desc: "Kasir is a Point of Sales application designed to streamline sales processes in retail stores or restaurants. Utilizing React.js for the frontend and Express.js for the backend"
    },
    {
      link: "https://mokpos-apps.vercel.app/",
      repository: "https://github.com/dimassagngsptr/mokpos_apps",
      title: "MokPOS",
      mock: "/mock-mokpos.png",
      desc: "Mokpos is an Point of Sales application designed to streamline sales processes in stores or restaurants Utilizing React.js for the frontend and Golang for the backend"
    },
  ]
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto">
        <div className="grid lg:grid-cols-2 gap-x-3">
          {mockProject?.map((value) => {
            return (
              <>
                <div className="flex-col flex lg:flex-row  mt-7">
                  <div className="flex-row flex mb-5">
                    <Image
                      src={value?.mock}
                      height={200}
                      width={200}
                      alt="Dimas - Project"
                      className="rounded-lg"
                    />
                    <div className="p-3">
                      <p className="text-white font-semibold text-xl text-center">{value?.title}</p>
                      <div className="flex flex-col">
                        <p className="text-gray-500 text-[10px] first:indent-5 text-justify lg:pr-2">
                          {value?.desc}
                        </p>
                        <div className="flex flex-row gap-5 justify-center items-center pt-2 mt-2 border-t">
                          <Link
                            href={value?.repository}
                            target="_blank"
                            className="z-[1]"
                            rel="noopener noreferrer"
                          >
                            <Image
                              width={100}
                              height={100}
                              src="/Github.svg"
                              alt="Repository"
                              className="w-7 h-7"
                            />
                          </Link>
                          <Link
                            href={value?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="z-[1]"

                          >
                            <Image
                              width={100}
                              height={100}
                              src="/world.png"
                              alt="Repository"
                              className="w-8 h-8"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
