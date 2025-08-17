"use client";
import Slider from "@/components/ui/sliders/Swiper";
import useTheme from "@/theme/hooks/useTheme";
import React from "react";
import projectsMock from "@/mocks/proyects/index.json";
import SingleProject from "./SingleProject";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  const { t } = useTranslation(["common"]);
  return (
    <div className="w-full h-auto flex justify-center items-center mt-20 relative overflow-hidden">
      <div className="w-[1280px] h-120">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("Projects.Section.Title")}
        </h2>
        <Slider>
          {projectsMock.map((project, index) => (
            <div
              key={`key-${index}-${project.image.src}-slider`}
              className="w-full h-auto"
            >
              <SingleProject project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsSection;
