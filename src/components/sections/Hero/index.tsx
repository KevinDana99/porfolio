"use client";
import skills from "@/mocks/skills";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("common");
  const [hover, setHover] = useState<null | number>(null);
  return (
    <div
      style={{ height: "calc(100vh - 82px)" }}
      className="bg-blue-500 flex items-center justify-center flex-col box-border overflow-hidden"
    >
      <div className="relative w-full h-100 flex mb-auto mt-10">
        <Marquee speed={100} direction="left">
          {skills.map((skill, index) => (
            <div
              onMouseOver={() => setHover(index)}
              className={`w-20 h-auto relative mr-30 text-white opacity-8 ${
                hover === index && "hover:opacity-100"
              }`}
              key={`key-${skill.name}-${index}`}
            >
              <skill.ico width={80} height={80} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex h-full items-center">
        <div className="flex h-140">
          <div className="flex flex-col items-start justify-center">
            <span className="text-8xl wrap-break-word w-2xl text-white">
              {t("Hero.Title.Text")}
            </span>

            <button
              type="button"
              className=" mt-20 text-center w-70 h-15 text-2xl cursor-pointer py-3 px-4 flex justify-center items-center gap-x-2 font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              {t("Hero.Button.Text")}
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                  stroke="black"
                  className="dark:hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                  stroke="white"
                  className="dark:block hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative w-[650px] h-[750px] ">
            <Image
              src="/kev-photo-q.png"
              alt="person"
              fill
              className=" object-cover"
            />
          </div>
        </div>
      </div>
      <div className={"relative w-full h-100 flex mt-auto  mb-10"}>
        <Marquee speed={100} direction="right">
          {skills.map((skill, index) => (
            <div
              onMouseOver={() => setHover(index)}
              className={`w-20 h-auto relative mr-30 text-white opacity-8 ${
                hover === index && "hover:opacity-100"
              }`}
              key={`key-${skill.name}-${index}`}
            >
              <skill.ico width={80} height={80} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
