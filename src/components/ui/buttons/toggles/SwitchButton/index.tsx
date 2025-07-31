import useTheme from "@/theme/hooks/useTheme";
import Image from "next/image";
import React, { useState } from "react";

const SwitcherButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { handleChangeMode } = useTheme();

  const handleCheckboxChange = () => {
    handleChangeMode();
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center ">
        <div className="relative ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? "bg-blue-500" : "bg-gray-700"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          >
            <Image
              src={`/${isChecked ? "sun2" : "moon"}.svg`}
              width={20}
              height={20}
              alt={isChecked ? "sun" : "moon"}
            />
          </div>
        </div>
      </label>
    </>
  );
};

export default SwitcherButton;
