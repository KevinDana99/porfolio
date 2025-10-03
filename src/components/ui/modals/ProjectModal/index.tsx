import Image from "next/image";
import React from "react";
import projects from "@/mocks/projects/index.json";
const ProjectModal = ({
  name,
  description,
  img,
  categories,
}: {
  name: string;
  description: string;
  img: { src: string; alt: string };
  categories: {
    name: string;
    ico: {
      src: string;
      alt: string;
    };
  }[];
}) => {
  return (
    <div className="flex">
      <div className="image-section w-500 h-180 relative mr-5">
        <Image src={img.src} alt={img.alt} fill />
      </div>
      <div className="flex flex-col h-180 bg-gray-100 p-5 box-border">
        <span className="text-3xl">{name}</span>
        <span className="text-md mt-10 text-gray-6  00">{description}</span>
        <span className="text-xl font-medium mt-10">
          Tecnologias utilizadas
        </span>
        <span className="text-md mt-5 flex section-category">
          {categories?.map((category) => (
            <Image
              className="mr-3"
              alt={category.ico.alt}
              src={category.ico.src}
              width={35}
              height={35}
            />
          ))}
        </span>
        <div className="flex h-full items-end justify-center">
          <button className="w-80 h-15 bg-black text-white rounded-md">
            Ir al proyecto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
