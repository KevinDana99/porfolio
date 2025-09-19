import React, { ReactNode } from "react";

const Card = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-100 h-55 shadow-md mb-5 ml-5 bg-white rounded-2xl">
      {children && children}
    </div>
  );
};

export default Card;
