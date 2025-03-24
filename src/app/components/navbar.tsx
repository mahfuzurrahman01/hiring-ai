"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const { language, toggleLanguage, t, dir } = useLanguage();

  return (
    <header className="border-b z-50 w-full bg-background/95 backdrop-blur fixed top-0 left-0 right-0">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            {t("navbar.logo")}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex gap-1 items-center px-3"
              >
                <Languages className="h-4 w-4" />
                <span>{language === "en" ? "English" : "العربية"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => language !== "en" && toggleLanguage()}
                className={language === "en" ? "bg-muted" : ""}
              >
                English {language === "en" && "✓"}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => language !== "ar" && toggleLanguage()}
                className={language === "ar" ? "bg-muted" : ""}
              >
                العربية {language === "ar" && "✓"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                {language === "en" ? "Light" : "فاتح"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                {language === "en" ? "Dark" : "داكن"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                {language === "en" ? "System" : "النظام"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
