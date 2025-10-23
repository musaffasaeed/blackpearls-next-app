// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  return {
    locale: locale ?? "en", // Use your actual default locale here
    messages: (await import(`../../messages/${locale ?? "en"}.json`)).default,
  };
});
