/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

export const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        Learning and Growing through{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-4">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="background img" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute top-8 object-cover rotate-3 rounded-lg"
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center hover:underline hover:scale-105 transition-all">
                  <a
                    className="flex lg:text-lg md:text-xs text-sm font-semibold text-purple"
                    href={item.source}
                    target={"_blank"}
                  >
                    Source Code
                  </a>

                  <VscGithub className="ms-3" color="#CBACF9" />
                </div>

                <div className="flex items-center hover:underline hover:scale-105 transition-all">
                  <a
                    className="flex lg:text-lg md:text-xs text-sm font-semibold text-purple"
                    href={item.link}
                    target={"_blank"}
                  >
                    Live Site
                  </a>

                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-center mt-5 mb-5">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
