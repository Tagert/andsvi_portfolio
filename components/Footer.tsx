/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { MagicButton } from "./ui/MagicButton";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 ">
        <img src="/footer-grid.svg" alt="grid" className="w-full opacity-50 " />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to improve? Let&apos;s learn and make{" "}
          <span className="text-purple">progress</span> together!
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s talk about how we can work
          together to achieve your goals.
        </p>

        <a href="mailto:mini.andrius@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex gap-4 mt-8 flex-col md:flex-col justify-center items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>

        <p className="mt-16 md:text-base text-sm md:font-normal font-light">
          Copyright © 2024
        </p>
      </div>
    </footer>
  );
};