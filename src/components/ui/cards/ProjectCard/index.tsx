import React from "react";
import Card from "../Card";
import Image from "next/image";
import { t } from "i18next";

const ProjectCard = ({
  img,
  ico,
  title,
  description,
  onClick,
  categories,
}: {
  img: { src: string; alt: string };
  ico: { src: string; alt: string };
  title: string;
  description: string;
  onClick: () => void;
  categories: [{ name: string; ico: { src: string; alt: string } }];
}) => {
  return (
    <Card
      className={"flex flex-col items-end box-border h-auto overflow-hidden"}
      onClick={onClick}
    >
      <div className="flex-col flex w-full h-full">
        <div className="relative h-60">
          <Image src={img.src} alt={img.alt} fill className="mr-5" />
        </div>
        <div className="p-5">
          <span className=" box-border text-2xl">{title}</span>
          <div className="overflow-clip line-clamp-2 text-gray-600 dark:text-gray-400">
            <span>{description}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start w-full h-auto pl-5 pr-5 pb-5 box-border">
        {categories.map((category) => (
          <Image
            src={category.ico.src}
            alt={category.ico.alt}
            width={35}
            height={35}
            className="mr-3"
            key={`${category}-key-ico`}
          />
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
