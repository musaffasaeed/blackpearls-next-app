import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ar"] as const;
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;

  return {
    locale: validLocale as string,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
