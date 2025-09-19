"use client";
import React, { ReactElement, ReactNode } from "react";
import useSearchQuery from "./hooks/useSearchQuery";
import { SearchIco } from "@/icons";

const SearchQuery = ({
  children,
  handleUpdateQuery,
}: {
  children?: ReactNode[];
  handleUpdateQuery: (query: string | null) => void;
}) => {
  const { handleSearchQuery } = useSearchQuery(handleUpdateQuery);

  return (
    <div className="w-full min-h-[800px] flex justify-center mt-20 ">
      <div className="flex flex-col w-[1300px]">
        <div className="w-200 h-15 bg-gray-200 rounded-3xl flex items-center p-5 box-border mb-20 self-center">
          <input
            type="text"
            placeholder="Introduce tu busqueda"
            className="w-full h-15 outline-0"
            onChange={handleSearchQuery}
          />

          <SearchIco width={25} height={25} className={"text-gray-800"} />
        </div>
        {children && (
          <div className="section-results flex flex-wrap">
            {children?.map((children) => children)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchQuery;
