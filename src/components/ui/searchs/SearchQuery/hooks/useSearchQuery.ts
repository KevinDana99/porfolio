"use client";
import Card from "@/components/ui/cards/Card";
import CertificationCard from "@/components/ui/cards/CertificationCard";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchQueryScopeType } from "../types";

const useSearchQuery = (data: any, keywords: string[]) => {
  const [query, setQuery] = useState<null | string>(null);
  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filterData = data.filter(
    (el: any) => query && el.name.toLowerCase().includes(query.toLowerCase())
  );

  const defaultFilter = filterData.length === 0 ? data : filterData;

  return { handleSearchQuery, query, filterData: defaultFilter };
};

export default useSearchQuery;
