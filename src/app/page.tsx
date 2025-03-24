"use client";

import { useLanguage } from "@/contexts/language-context";
import VoiceInput from "./components/voiceInput";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Main content section */}
      <section className="flex-1 w-full p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center mt-8">
            {t("home.welcomeMessage")}
          </h1>

          {/* This is where your dynamic UI content will go */}
          <div className="min-h-[50vh] rounded-lg">
            {/* Your cards and dynamic content here */}
          </div>
        </div>
      </section>

      {/* Voice input section - fixed at bottom */}
      <section className="w-full bg-transparent h-[25vh] sticky bottom-0 left-0 right-0 z-10">
        <VoiceInput />
      </section>
    </div>
  );
}
