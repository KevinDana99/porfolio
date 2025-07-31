import React, { useState } from "react";
import languages from "./languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import i18n from "@/locales/i18n";

const LanguageButton = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleVisibleMenu = (visible: boolean) => {
    setVisibleMenu(visible);
  };
  const [selectedLanguage, setSelectedLanguage] = useState<null | string>(null);

  const handleSelectedLanguage = (currentLanguage: string) => {
    setSelectedLanguage(currentLanguage);
    i18n.changeLanguage(currentLanguage);
    handleVisibleMenu(false);
  };

  const ref = useClickOutside<HTMLDivElement>(() => handleVisibleMenu(false));
  const currentLanguage =
    languages.find((el) => el.tag === selectedLanguage) ?? languages[0];

  return (
    <nav className=" border-gray-20  relative" ref={ref}>
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto cursor-pointer"
        onClick={() => handleVisibleMenu(true)}
      >
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse ">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="flex items-center font-medium justify-center text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer"
          >
            {currentLanguage?.ico}
          </button>
          <div
            className={`z-50 ${
              !visibleMenu && "hidden"
            } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 absolute right-0 top-5`}
          >
            <ul className="py-2 font-medium" role="none">
              {languages.map(({ ico, name, tag }) => {
                return (
                  <li
                    key={`key-lang-${tag}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectedLanguage(tag);
                    }}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        {ico}
                        {name}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LanguageButton;
