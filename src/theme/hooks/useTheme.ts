"use client";
import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    setIsDark(classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  const handleChangeMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return { handleChangeMode, isDarkMode: isDark };
};

export default useTheme;
