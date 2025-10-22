import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "@/components/providers";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider messages={messages}>
        <Providers>{children}</Providers>
      </NextIntlClientProvider>
    </div>
  );
}
