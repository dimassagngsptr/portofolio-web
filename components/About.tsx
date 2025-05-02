import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center text-justify">
          Bachelor of Management (Finance) graduate from Widyatama University Bandung
          with a strong interest and expertise in developing dynamic and responsive websites. As a
          Backend Developer at PT Ihsan Solusi Informatika, Dimas was responsible for handling the POS
          BDS project for PT. POS Indonesia Persero, demonstrating Dimas ability to build reliable and
          integrated backend solutions.
          <br/>
          <br/>
          Dimas possesses expertise in various technologies, including NodeJs, Golang, React.js, GoFiber,
          Laravel, and Express.js. Over the past year, Dimas successfully completed a Web Developer
          bootcamp that deepened understanding of the Software Development Life Cycle (SDLC), RESTful
          APIs, and Object-Oriented Programming (OOP), while also enhancing his ability to collaborate
          effectively within a team.
          <br/>
          <br/>
          With a passion for learning the latest technologies, Dimas continuously hones skills to create
          innovative solutions that deliver the best user experiences. Dimas commitment to quality work,
          responsibility, and adaptability makes Dimas a valuable asset in supporting the needs of any
          organization
        </p>
      </div>
    </section>
  );
};

export default About;
