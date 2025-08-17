"use client";
import Image from "next/image";
import React, { useState } from "react";
import skillsMock from "../../../mocks/skills";
import certificationsMock from "../../../mocks/certifications/index.json";
import { ArrowRight } from "@/icons";
import { useTranslation } from "react-i18next";
const Certification = () => {
  const [hover, setHover] = useState<number | null>(null);
  const handleHover = (id: number) => {
    setHover(id);
  };
  const handleHoverOut = () => {
    setHover(null);
  };

  const { t } = useTranslation(["common"]);
  return (
    <div className="w-full h-auto flex justify-center items-start mt-20 ">
      <div className="flex flex-col mr-20">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("Certifications.Section.Title")}
        </h2>
        <div className="flex flex-col justify-between items-center rounded-2xl w-[600px] h-auto bg-transparent relative ">
          <div className="flex-col">
            {certificationsMock.map((certification, index) => (
              <div
                key={`index-${index}-key-certification`}
                className="hover:scale-102 hover:min-h-[188px] transition-all duration-300 p-5 w-150 h-0 min-h-[128px]  bg-white rounded-2xl dark:bg-gray-800 shadow-sm flex flex-col box-border items-center mb-5 cursor-pointer"
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleHoverOut}
              >
                <div className="flex items-center ">
                  <div className="min-w-20 h-20 relative rounded-2xl overflow-hidden mr-5">
                    <Image alt="next" src={"/platzi.jpg"} fill></Image>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg dark:text-white ">
                      Certificacion de React.js
                    </h3>
                    <span className="text-sm dark:text-gray-400 text-gray-600">
                      Certificacion de React.js PlatziPlatzi Expedición: abr.
                      2025Expedición: abr. 2025 ID de la credencial
                      42f4929c-a77c-4579-84c0-3ead307eOcabID de la credencial
                      42f4929c-a77c-4579-84c0-3ead307eOcab
                    </span>
                  </div>
                </div>
                {hover === index && (
                  <button className=" dark:border-0 border-2 border-solid border-neutral-900 text-black bg-white box-border dark:text-neutral-800 mt-5 rounded-xl h-10 p-5 dark:bg-neutral-200 shadow-sm w-full flex items-center justify-center cursor-pointer">
                    {t("Certifications.Button.Text")}
                  </button>
                )}
              </div>
            ))}
          </div>
          <button className="hover:scale-105 transition-all duration-300 cursor-pointer box-border text-white bg-blue-500 dark:text-neutral-800 mt-2 rounded-xl h-10 p-5 dark:bg-neutral-200 shadow-sm w-auto flex items-center">
            <span className="mr-2">{t("Certifications.Section.Button")}</span>
            <ArrowRight width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("Skills.Section.Title")}
        </h2>
        <div className="p-7 flex rounded-2xl w-[600px] h-auto dark:bg-gray-800 bg-primary relative shadow-sm justify-center items-center">
          <div className="flex flex-wrap justify-start items-center w-[500px]">
            {skillsMock.map((skill, index) => (
              <div
                key={`key-image-${skill.name}-${index}`}
                className="mr-3 mt-3 flex flex-col justify-center items-center w-[110px] h-[90px] text-gray-800
                dark:text-white"
              >
                <>{skill.ico && <skill.ico />}</>
                <div className="mt-2">{`${skill.name} ${
                  skill.version ?? ""
                }`}</div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-5xl mb-10 dark:text-white mt-10">
          {t("Skills.Learning.Title")}
        </h2>
        <div className="p-7 flex rounded-2xl w-[600px] h-auto dark:bg-gray-800 bg-primary relative shadow-sm justify-center items-center">
          <div className="flex flex-wrap justify-start items-center w-[500px]">
            {skillsMock.map((skill, index) => (
              <div
                key={`key-image-${skill.name}-${index}`}
                className="mr-3 mt-3 flex flex-col justify-center items-center w-[110px] h-[90px] text-gray-800
                dark:text-white"
              >
                <>{skill.ico && <skill.ico />}</>
                <div className="mt-2">{`${skill.name} ${
                  skill.version ?? ""
                }`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
