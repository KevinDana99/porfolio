import React from "react";
import ItemTimeline from "./ItemTimeline";
import Image from "next/image";
import timeline from "@/mocks/timeline";

const ExperienceTimeline = () => {
  return (
    <div className=" box-border flex-col h-[600px] ">
      {timeline.map((experience, index) => (
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
