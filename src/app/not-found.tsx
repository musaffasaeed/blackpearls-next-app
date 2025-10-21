"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, ArrowLeft, Phone, CheckCircle } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("notFound");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* 404 Error Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t("heading")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("description")}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => router.push("/")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Home className="w-5 h-5 mr-2" />
                {t("backHome")}
              </Button>

              <Button
                onClick={() => router.back()}
                variant="outline"
                size="lg"
                className="px-8 py-3">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </div>
          </div>

          {/* Helpful Suggestions */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {t("suggestions.title")}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Check URL</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t("suggestions.checkUrl")}
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Homepage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t("suggestions.goHome")}
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t("suggestions.contact")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#about">
                <Button variant="outline" className="px-6 py-2">
                  About Us
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" className="px-6 py-2">
                  Services
                </Button>
              </Link>
              <Link href="/#portfolio">
                <Button variant="outline" className="px-6 py-2">
                  Portfolio
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" className="px-6 py-2">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
