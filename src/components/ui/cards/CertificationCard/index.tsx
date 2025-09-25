import React from "react";
import Card from "../Card";
import Image from "next/image";
import { t } from "i18next";

const CertificationCard = ({
  img,
  ico,
  title,
  description,
  onClick,
}: {
  img: { src: string; alt: string };
  ico: { src: string; alt: string };
  title: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <Card className={"flex flex-col items-end p-5 box-border"}>
      <div className="flex-col flex w-full h-full mb-2">
        <div className="flex justify-start items-center ">
          <Image
            src={"/platzi.jpg"}
            alt={img.alt}
            width={60}
            height={60}
            className="mr-5 rounded-2xl"
          />

          <span className="text-2xl">{title}</span>
        </div>
        <div className="mt-5 overflow-clip line-clamp-2 text-gray-600 dark:text-gray-400">
          <span>{description}</span>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-50 ">
        <button
          onClick={onClick}
          className=" dark:border-0 border-2 border-solid border-neutral-900 text-black bg-white box-border dark:text-neutral-800 rounded-xl h-10 p-5 dark:bg-neutral-200 shadow-sm w-full flex items-center justify-center cursor-pointer"
        >
          {t("Certifications.Button.Text")}
        </button>
        <Image
          src={ico.src}
          alt={ico.alt}
          width={40}
          height={40}
          className="ml-5"
        />
      </div>
    </Card>
  );
};

export default CertificationCard;
