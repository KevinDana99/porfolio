"use client";
import CertificationCard from "@/components/ui/cards/CertificationCard";
import SearchQuery from "@/components/ui/searchs/SearchQuery";
import React, { useState } from "react";
import certifications from "@/mocks/certifications/index.json";
const CertificationSection = () => {
  const [certificationQuery, setCertificationQuery] = useState<null | string>(
    null
  );

  const findCertification = certifications.filter(
    (el) => certificationQuery && el.name.includes(certificationQuery)
  );
  return (
    <>
      <SearchQuery handleUpdateQuery={(query) => setCertificationQuery(query)}>
        {findCertification.map((certification, index) => (
          <CertificationCard key={`${index}-key-certification-card`} />
        ))}
      </SearchQuery>
      <div className="flex justify-start align-top bg-amber-50">
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
};

export default CertificationSection;
