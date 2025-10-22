"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("ceo");

  const ceoInfo = {
    name: t("name"),
    title: t("title"),
    image: "/images/hero-background.jpg",
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
            className="bg-white rounded-2xl p-8 shadow-lg border border-border/20">
            <div className="text-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mx-auto relative mb-6">
                <Image
                  src={ceoInfo.image}
                  alt={ceoInfo.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">{ceoInfo.name}</h4>
              <p className="text-lg text-accent font-semibold mb-4">{ceoInfo.title}</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">{t("experience.title")}</h5>
                <p className="text-sm text-muted-foreground">{ceoInfo.experience}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">{t("achievements.title")}</h5>
                <p className="text-sm text-muted-foreground">{ceoInfo.achievements}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
