"use client";
import React from "react";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="w-full h-90 flex justify-center items-start mt-20 ">
      <div className="flex flex-col w-[1300px] h-full">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("About.Section.Title")}
        </h2>
        <div className="dark:text-white text-lg p-7 flex-col flex justify-center rounded-2xl w-full h-full dark:bg-gray-800 bg-primary relative shadow-sm">
          {t("About.Text")}
        </div>
      </div>
    </div>
  );
};

export default About;
