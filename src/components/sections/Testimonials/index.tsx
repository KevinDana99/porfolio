"use client";
import Reviews from "@/components/ui/reviews";
import React from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="w-full h-auto flex justify-center items-start mt-20">
      <div className="flex flex-col w-[1280px]">
        <h2 className="text-5xl mb-10 dark:text-white">
          {t("Testimonials.Title")}
        </h2>
        <Reviews />
      </div>
    </div>
  );
};

export default Testimonials;
