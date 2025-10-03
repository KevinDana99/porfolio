"use client";
import ProjectCard from "@/components/ui/cards/ProjectCard";
import SearchQuery from "@/components/ui/searchs/SearchQuery";
import React, { useEffect, useState } from "react";
import projects from "@/mocks/projects/index.json";
import Card from "@/components/ui/cards/Card";
import Image from "next/image";
import ProjectModal from "@/components/ui/modals/ProjectModal";

const WrapperProjects = ({ id }: { id?: string }) => {
  const [currentProject, setCurrentProject] = useState<
    null | (typeof projects)[0]
  >(null);

  return (
    <>
      <SearchQuery
        elementId={id}
        data={projects}
        scope={"projects"}
        keywords={["react"]}
        onSelectedProject={(id: number) => {
          const project = projects[id];
          setCurrentProject(project);
        }}
        renderedElWithModal={{
          el: ProjectModal,
          props: {
            name: currentProject?.name,
            description: currentProject?.description,
            img: { src: currentProject?.img.src, alt: currentProject?.img.alt },
            categories: currentProject?.categories,
          },
          width: 1300,
        }}
      ></SearchQuery>
    </>
  );
};

export default WrapperProjects;
