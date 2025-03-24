"use client";

import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{t("home.title")}</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        {t("home.subtitle")}
      </p>
      <p className="mt-4 text-xl">{t("home.welcomeMessage")}</p>
    </div>
  );
}
