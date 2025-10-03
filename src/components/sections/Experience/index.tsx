"use client";
import Github from "@/components/ui/integrations/Github";
import Status from "@/components/ui/status/CommingSoon";
import ExperienceTimeline from "@/components/ui/timelines/ExperienceTimeline";
import useTheme from "@/theme/hooks/useTheme";
import React from "react";
import { useTranslation } from "react-i18next";
const Experience = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  return (
    <div className="w-full h-180 flex justify-center items-start mt-20 ">
      <div className="flex flex-col mr-20">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("Experience.Section.Title")}
        </h2>
        <div className="p-7 flex-col flex justify-center rounded-2xl w-[600px] h-[600px] dark:bg-gray-800 bg-primary relative shadow-sm">
          <ExperienceTimeline />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("Experience.Section.Github.Title")}
        </h2>
        <div className="p-7 flex-col flex justify-center rounded-2xl w-[600px] h-[600px] bg-transparent relative">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=kevindana99&show_icons=true&theme=github${
              isDarkMode ? "_dark" : ""
            }`}
            alt="Estadísticas de GitHub de kevindana99"
            width={550}
          />
          <div className="mt-10 w-full h-full">
            <Status status={null}>
              <Github></Github>
            </Status>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
