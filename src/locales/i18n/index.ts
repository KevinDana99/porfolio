import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateCommonEn from "../en/common.json";
import translateCommonEs from "../es/common.json";

function detectLocaleFromUrl() {
  if (typeof window === "undefined") return "es"; // fallback SSR
  const supportedLocales = ["es", "en"];
  const locale = window.location.pathname.split("/")[1];
  return supportedLocales.includes(locale) ? locale : "es";
}
i18n.use(initReactI18next).init({
  lng: detectLocaleFromUrl(),
  fallbackLng: "en",
  ns: ["common", "page"],
  defaultNS: "common",
  resources: {
    en: {
      common: translateCommonEn,
    },
    es: {
      common: translateCommonEs,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
