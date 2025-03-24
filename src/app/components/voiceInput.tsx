"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

const VoiceInput: React.FC = () => {
  const { language, t } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Get direction based on current language
  const dir = language === "ar" ? "rtl" : "ltr";

  const toggleRecording = () => {
    if (!isRecording) {
      // Start recording
      setIsRecording(true);
      setRecognizedText("");
    } else {
      // End recording and simulate processing
      setIsRecording(false);
      setIsProcessing(true);

      // Simulate processing delay
      setTimeout(() => {
        setIsProcessing(false);
        // For demo purposes, set some sample text based on language
        setRecognizedText(
          language === "en"
            ? "This is a sample recognized text. How can I help you today?"
            : "هذا نص عينة تم التعرف عليه. كيف يمكنني مساعدتك اليوم؟"
        );
      }, 1500);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-background/80 backdrop-blur-sm">
      <div
        className={cn(
          "w-full max-w-3xl mx-auto px-4 py-3 flex flex-col items-center gap-4",
          language === "ar" ? "direction-rtl" : ""
        )}
        dir={dir}
      >
        {/* Text input/output area */}
        <div
          className={cn(
            "w-full relative h-16 rounded-full bg-background border shadow-sm px-6 overflow-hidden",
            recognizedText ? "text-foreground" : "text-muted-foreground",
            isProcessing ? "animate-pulse" : ""
          )}
        >
          <div className="absolute inset-0 flex items-center px-6 overflow-hidden text-ellipsis whitespace-nowrap">
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>
                  {language === "en" ? "Processing..." : "جاري المعالجة..."}
                </span>
              </div>
            ) : (
              recognizedText || t("voiceInput.placeholder")
            )}
          </div>
        </div>

        {/* Voice control area */}
        <div className="flex flex-col items-center">
          <Button
            onClick={toggleRecording}
            size="icon"
            className={cn(
              "h-14 w-14 rounded-full shadow-md transition-all duration-300",
              isRecording
                ? "bg-red-500 hover:bg-red-600 animate-pulse ring-4 ring-red-300 dark:ring-red-800"
                : "bg-primary hover:bg-primary/90"
            )}
            aria-label={
              isRecording
                ? t("voiceInput.stopRecording")
                : t("voiceInput.startRecording")
            }
          >
            {isRecording ? (
              <MicOff className="h-6 w-6" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>

          <div className="mt-2 text-sm text-muted-foreground">
            {isRecording
              ? t("voiceInput.listening")
              : t("voiceInput.pressToSpeak")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceInput;
