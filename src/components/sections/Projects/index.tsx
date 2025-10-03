"use client";
import Slider from "@/components/ui/sliders/Swiper";
import useTheme from "@/theme/hooks/useTheme";
import React, { useState } from "react";
import projectsMock from "@/mocks/projects/index.json";
import SingleProject from "./SingleProject";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  const { t } = useTranslation(["common"]);
  const { locale } = useParams();
  return (
    <div className="w-full h-auto flex justify-center items-center mt-20 relative overflow-hidden">
      <div className="w-[1280px] h-120">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("Projects.Section.Title")}
        </h2>

        <Slider>
          {projectsMock.map((project, index) => (
            <Link href={`${locale}/projects/${index}`}>
              <div
                key={`key-${index}-${project.img.src}-slider`}
                className="w-full h-auto"
              >
                <SingleProject project={project} />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsSection;
