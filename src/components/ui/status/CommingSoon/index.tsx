import React, { JSX, ReactNode } from "react";

const Status = ({
  status,
  children,
  fullScreen,
}: {
  status: null | "check";
  children?: JSX.Element;
  fullScreen?: boolean;
}) => {
  return !status ? (
    <div
      className={`shadow-xl rounded-2xl w-full ${
        fullScreen ? "h-screen" : "h-full"
      } relative flex justify-center items-center`}
    >
      <span className="text-3xl text-black dark:text-white absolute z-10 opacity-60 font-bold">
        Proximamente
      </span>
      <div className="blur-md bg-white dark:bg-gray-800 w-full h-full absolute "></div>
    </div>
  ) : (
    children
  );
};

export default Status;
