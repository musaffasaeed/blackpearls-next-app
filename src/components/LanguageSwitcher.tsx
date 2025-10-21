"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-primary hover:text-accent">
        <Globe className="h-4 w-4" />
        <span className="font-medium">{locale === "en" ? "English" : "العربية"}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            <button
              onClick={() => switchLanguage("en")}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === "en" ? "bg-accent/10 text-accent font-medium" : "text-gray-700"
              }`}>
              English
            </button>
            <button
              onClick={() => switchLanguage("ar")}
              className={`w-full text-right px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === "ar" ? "bg-accent/10 text-accent font-medium" : "text-gray-700"
              }`}>
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
