import React from "react";
import projectsMock from "@/mocks/projects/index.json";
import Image from "next/image";
const SingleProject = ({ project }: { project: (typeof projectsMock)[0] }) => {
  const { id, img, name, tags } = project;
  console.log({ project });
  return (
    <div className="w-150 h-auto group relative rounded-lg duration-300 hover:scale-120 ">
      <div className="relative block aspect-[37/22] w-full">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image src={img.src} alt="image" fill className="rounded-lg" />
      </div>
    </div>
  );
};

export default SingleProject;
