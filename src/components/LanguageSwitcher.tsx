"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract locale from pathname to ensure we get the correct current locale
  const getCurrentLocale = () => {
    const segments = pathname?.split("/") || [];
    const firstSegment = segments[1];
    const detectedLocale = firstSegment === "ar" ? "ar" : "en";
    console.log("LanguageSwitcher - pathname:", pathname, "detected locale:", detectedLocale);
    return detectedLocale;
  };

  const locale = getCurrentLocale();

  const switchLanguage = (newLocale: "en" | "ar") => {
    // Don't switch if already on the same locale
    if (newLocale === locale) return;

    // Extract the path without the current locale
    let pathWithoutLocale = pathname || "/";

    // Remove the current locale prefix if it exists
    if (pathname?.startsWith(`/${locale}`)) {
      pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    }

    // Ensure path starts with /
    if (!pathWithoutLocale.startsWith("/")) {
      pathWithoutLocale = "/" + pathWithoutLocale;
    }

    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 hover:text-accent px-3 py-2 hover:bg-transparent">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{locale === "en" ? "EN" : "AR"}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-[60] px-1 py-2">
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors mb-2 ${
            locale === "en" ? "bg-accent/10 text-accent" : "hover:bg-gray-50"
          }`}>
          {/* Simple EN label (replace with a flag if you like) */}
          <span className="text-sm font-medium">English (US)</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => switchLanguage("ar")}
          className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
            locale === "ar" ? "bg-accent/10 text-accent" : "hover:bg-gray-50"
          }`}>
          <span className="text-sm font-medium">العربية (SA)</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
