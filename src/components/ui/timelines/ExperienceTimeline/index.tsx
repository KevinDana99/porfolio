import React from "react";
import ItemTimeline from "./ItemTimeline";
import Image from "next/image";
import timelineEn from "@/mocks/timeline/en";
import timelineEs from "@/mocks/timeline/es";
import { useParams } from "next/navigation";

const ExperienceTimeline = () => {
  const { locale } = useParams();
  const timelineMock = locale === "en" ? timelineEn : timelineEs;
  return (
    <div className=" box-border flex-col h-[600px] ">
      {timelineMock.map((experience, index) => (
        <ItemTimeline
          key={`key-${index}-item-timeline`}
          title={experience.business_name}
          description={experience.content}
          mode={experience.type}
          dateAt={experience.date}
        >
          <Image
            src={experience.img.src}
            className="object-cover"
            fill
            alt={`${experience.business_name}-experience-logo`}
          />
        </ItemTimeline>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
