import { GitHubIco, GitRepoIco } from "@/icons";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Github = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="flex-col flex dark:text-white w-full h-full dark:bg-[#0D1117] bg-white  p-5 box-border mt-5 rounded-md border-1 border-solid border-white">
      <div className="flex relative h-10 justify-start items-center">
        <GitHubIco width={25} height={25} />
        <span className="ml-3 text-1xl">KevinDana99</span>
      </div>
      <div className="flex flex-col mt-4 rounded-2xl">
        <div className="w-full flex items-center p-2 box-border  dark:bg-[#0D1117] h-12 relative  border-t-1  border-solid border-neutral-200 dark:border-neutral-700">
          <div className="flex">
            <GitRepoIco width={25} height={25} className={"text-blue-500"} />

            <span className="text-sm ml-2">Repositorio 1</span>
          </div>
        </div>
        <div className="w-full flex items-center p-2 box-border dark:bg-[#0D1117] h-12 relative  border-t-1  border-solid border-neutral-200 dark:border-neutral-700">
          <GitRepoIco width={25} height={25} className={"text-blue-500"} />
          <span className="text-sm ml-2">Repositorio 1</span>
        </div>
        <div className="w-full flex items-center  p-2 box-border dark:bg-[#0D1117]  h-12 relative  border-t-1  border-b-1  border-solid border-neutral-200 dark:border-neutral-700">
          <GitRepoIco width={25} height={25} className={"text-blue-500"} />

          <span className="text-sm ml-2">Repositorio 1</span>
        </div>

        <button className="hover:scale-105 transition-all duration-300 cursor-pointer dark:border-0 border-2 border-solid border-neutral-900 text-black bg-white box-border dark:text-neutral-800 mt-5 rounded-xl w-30 h-10 p-2 dark:bg-neutral-200 shadow-sm self-center">
          {t("Experience.Section.Github.Button")}
        </button>
      </div>
    </div>
  );
};

export default Github;
