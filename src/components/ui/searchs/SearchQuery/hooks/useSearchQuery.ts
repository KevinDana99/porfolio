"use client";
import { ChangeEvent, useEffect, useState } from "react";

const useSearchQuery = (handleUpdateQuery: (query: string | null) => void) => {
  const [query, setQuery] = useState<null | string>(null);
  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    handleUpdateQuery(query);
  }, [query]);

  return { handleSearchQuery, query };
};

export default useSearchQuery;
