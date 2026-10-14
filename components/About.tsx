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
          As Backend Developer with over 2 years of professional experience, specializing in Golang and the development of reliable, scalable, and maintainable backend systems. Experienced in building microservices architectures, RESTful APIs, GraphQL, and gRPC-based services, as well as integrating databases and external services to support business requirements.
          <br/>
          <br/>
          Proficient in Golang, SQL, GORM, Microsoft SQL Server, Oracle, Elastic Search, Redis, and Firebase Cloud Messaging (FCM), with hands-on experience in database optimization, asynchronous processing, system integration, and application performance monitoring. Familiar with technologies such as Node.js, Python, AWS, and GCP.
          <br/>
          <br/>
          Demonstrates strong problem-solving skills, adaptability, and a commitment to writing clean, efficient, and maintainable code. Passionate about continuously improving technical expertise and delivering reliable backend solutions that support business objectives.
        </p>
      </div>
    </section>
  );
};

export default About;
