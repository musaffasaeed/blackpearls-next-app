"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("ceo");

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .filter((char) => char && char.match(/[A-Za-z]/))
      .slice(0, 3)
      .join("")
      .toUpperCase();
  };

  const ceoInfo = {
    name: t("name"),
    role: t("role"),
    initials: getInitials(t("name")),
    bio: t("bio"),
    experience: t("experience.content"),
    achievements: t("achievements.content"),
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team" ref={ref} className="section-padding white-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <h3 className="text-sm font-medium text-primary mb-2">{t("subtitle")}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t("title")}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("description")}</p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">{ceoInfo.bio}</p>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t("cta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right Content - CEO Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-border/20 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                {/* Avatar with initials */}
                <div className="w-36 h-36 rounded-full mx-auto mb-6 relative shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center border-4 border-white shadow-xl">
                    <span className="text-4xl font-bold text-white">{ceoInfo.initials}</span>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-full border-2 border-accent/30 animate-pulse"></div>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-2">{ceoInfo.name}</h4>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px w-12 bg-accent"></div>
                  <p className="text-lg text-accent font-semibold">{ceoInfo.role}</p>
                  <div className="h-px w-12 bg-accent"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-primary mb-2 text-base">{t("experience.title")}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ceoInfo.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-primary mb-2 text-base">{t("achievements.title")}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ceoInfo.achievements}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
