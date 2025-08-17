import React, { JSX, useEffect, useRef, useState } from "react";

const ItemTimeline = ({
  children,
  title,
  description,
  mode,
  dateAt,
}: {
  children: JSX.Element;
  title: string;
  description: string;
  mode: string;
  dateAt: string;
}) => {
  return (
    <div className={`flex items-start justify-center h-auto `}>
      <div className="flex">
        <div className={`flex flex-col mr-5`}>
          <div className="w-15 min-h-15 rounded-full bg-blue-500 relative overflow-hidden">
            {children}
          </div>
          <div className="ml-6 w-3 h-full bg-blue-500 relative"></div>
        </div>
        <div className="flex w-full mt-4 ">
          <div className="dark:text-gray-400  text-gray-600 flex flex-col justify-center items-start">
            <div className="flex justify-center items-center">
              <span className="text-[20px] dark:text-gray-200 text-black">
                {title}
              </span>

              <span className="ml-2 dark:text-gray-300">({mode})</span>
            </div>
            <span className=" dark:text-gray-300">{dateAt}</span>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTimeline;
