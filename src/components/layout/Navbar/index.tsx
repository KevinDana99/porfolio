"use client";
import LanguageButton from "@/components/ui/buttons/language/LanguageButton";
import SwitcherButton from "@/components/ui/buttons/toggles/SwitchButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Nabvar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleToggleVisibleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  const pathname = usePathname();
  const { t } = useTranslation("common");
  const itemsNavbar = [
    {
      name: `${t("Navbar.item.about")}`,
      href: "/",
    },
    { name: `${t("Navbar.item.proyects")}`, href: "/proyects" },
    { name: `${t("Navbar.item.blog")}`, href: "/blog" },
    { name: `${t("Navbar.item.courses")}`, href: "/courses" },
    { name: `${t("Navbar.item.certifications")}`, href: "/certifications" },
  ];
  return (
    <nav className="bg-primary border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a
          href="https://www.github.com/kevindana99"
          className="flex items-center space-x-3 rtl:space-x"
        >
          <Image
            src="/profile.jpeg"
            alt="profile-image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {`KevCodea`}
          </span>
        </a>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x relative">
          <div
            className={`z-50 ${
              !visibleMenu && "hidden"
            } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 absolute right-0 top-5`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="w-30 block text-sm text-gray-900 dark:text-white">
                Settings
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                ></a>
              </li>
              <li></li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <LanguageButton />
          <SwitcherButton />
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {itemsNavbar.map(({ name, href }, index) => (
              <li key={`key-itemsNavbar-${index}`}>
                <Link
                  href={href}
                  className={`block py-2 px-3 dark:text-white rounded-sm md:bg-transparent md:p-0 ${
                    pathname === href &&
                    "md:text-gray-700  md:dark:text-gray-500"
                  } hover:scale-105 transform transition-transform`}
                  aria-current="page"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nabvar;
