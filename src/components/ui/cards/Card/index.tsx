import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
const Card = ({
  children,
  className,
  onClick,
}: {
  children?: ReactNode;
  className: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        `w-100 h-55 shadow-md mb-5 ml-5 bg-white rounded-2xl dark:bg-gray-800  dark:text-gray-200`,
        className
      )}
    >
      {children && children}
    </div>
  );
};

export default Card;
