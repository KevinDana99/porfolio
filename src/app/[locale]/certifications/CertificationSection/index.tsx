"use client";
import CertificationCard from "@/components/ui/cards/CertificationCard";
import SearchQuery from "@/components/ui/searchs/SearchQuery";
import React, { useState } from "react";
import certifications from "@/mocks/certifications/index.json";
const CertificationSection = () => {
  return (
    <>
      <SearchQuery
        data={certifications}
        scope={"certifications"}
        keywords={["react"]}
      ></SearchQuery>
      <div className="flex justify-start align-top bg-amber-50">
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
};

export default CertificationSection;
