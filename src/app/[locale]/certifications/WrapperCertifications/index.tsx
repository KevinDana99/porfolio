"use client";
import ProjectCard from "@/components/ui/cards/ProjectCard";
import SearchQuery from "@/components/ui/searchs/SearchQuery";
import React, { useEffect, useState } from "react";
import certifications from "@/mocks/certifications/es/index.json";
import Card from "@/components/ui/cards/Card";
import Image from "next/image";

const WrapperCertifications = ({ id }: { id?: string }) => {
  const [currentCertification, setCurrentCertification] = useState<
    null | (typeof certifications)[0]
  >(certifications[0]);
  console.log({ id });
  return (
    <>
      <SearchQuery
        elementId={id}
        data={certifications}
        scope={"certifications"}
        keywords={["react"]}
        onSelectedProject={(id: number) => {
          const cert = certifications[id];
          setCurrentCertification(cert);
        }}
        renderedElWithModal={{
          el: Image,
          props: {
            src: currentCertification?.img.src,
            alt: currentCertification?.img.alt,
            fill: true,
          },
          width: 1000,
        }}
      ></SearchQuery>
    </>
  );
};

export default WrapperCertifications;
