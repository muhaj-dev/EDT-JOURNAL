import React from "react";
import { explore } from "../Utility/Data";
import { MdLaptop } from "react-icons/md";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="relative w-full">
    <div className="my-5  w-[95%]  max-w-[1300px] mx-auto">
      <h1 className="font-bold text-2xl text-center">
        Explore science, education and technology research
      </h1>

      <div className="z-10 relative bg-white mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 laptop_l:grid-cols-4 gap-4 ">
        <div className="ex-card transition-colors duration-200 ease-in-out py-8 px-5 rounded-bl-[1.8rem] rounded-tr-[1.8rem]">
          <Image src="./images/exp1.svg" alt="lang" width={40} height={40} />

          <p className="transition-colors duration-200 ease-in-out font-bold text-lg my-3 leading-5">
            Digital Curriculum Development
          </p>
          <p className="transition-colors duration-200 ease-in-out text-sm font-semibold opacity-70">
            follow the latest trends and innovations in online educations,
            including virtual classrooms, learning management systems and onlinw
            course design.
          </p>
        </div>

        <div className="ex-card transition-colors duration-200 ease-in-out py-8 px-5 rounded-bl-[1.8rem] rounded-tr-[1.8rem]">
          <div className="img">
            <MdLaptop className="" size={40} />
          </div>
          <p className="transition-colors duration-200 ease-in-out font-bold text-lg my-3 leading-5">
            E -Learnig
          </p>
          <p className="transition-colors duration-200 ease-in-out text-sm font-semibold opacity-70">
            follow the latest trends and innovations in online educations,
            including virtual classrooms, learning management systems and onlinw
            course design.
          </p>
        </div>

        <div className="ex-card transition-colors duration-200 ease-in-out py-8 px-5 rounded-bl-[1.8rem] rounded-tr-[1.8rem]">
          <Image src="./images/exp3.svg" alt="lang" width={40} height={40} />

          <p className="transition-colors duration-200 ease-in-out font-bold text-lg my-3 leading-5">
            Emerging Technology
          </p>
          <p className="transition-colors duration-200 ease-in-out text-sm font-semibold opacity-70">
            stay up-to-date with emerging technologies such as AI, VR, AR, and
            their potential applications in education.
          </p>
        </div>

        <div className="ex-card transition-colors duration-200 ease-in-out py-8 px-5 rounded-bl-[1.8rem] rounded-tr-[1.8rem]">
          <Image src="./images/exp4.svg" alt="lang" width={40} height={40} />

          <p className="transition-colors duration-200 ease-in-out font-bold text-lg my-3 leading-5">
            Blend Learning
          </p>
          <p className="transition-colors duration-200 ease-in-out text-sm font-semibold opacity-70">
            the integration of digital technologies wit traditional classroom
            instruction, focusing on effective strategies for hybrid learning
            environments.
          </p>
        </div>
      </div>

      <div className="z-0 bg-ball h-[28rem] w-[28rem] absolute -right-[9rem] -bottom-[18rem]" />

    </div>

    </div>
  );
}
