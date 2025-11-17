"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Calendar, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("whyChooseUs");

  const stats = [
    {
      icon: Building2,
      number: "500+",
      label: t("stats.projects"),
    },
    {
      icon: Users,
      number: "98%",
      label: t("stats.clients"),
    },
    {
      icon: Calendar,
      number: "15+",
      label: t("stats.experience"),
    },
    {
      icon: Award,
      number: "50+",
      label: t("stats.team"),
    },
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/section-background.webp"
          alt="Architectural blueprint pattern"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-0">
            Why Choose <span className="text-accent">Black Pearls</span>?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discover what sets us apart in the MEP construction industry
          </p>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="relative text-center mb-12">
            {/* Background large text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-[10rem] lg:text-[12rem] font-extrabold text-white/10 tracking-tighter select-none">
                {t("backgroundText")}
              </h2>
            </div>
            {/* Main heading */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight pt-6">
                <span className="text-white/90">{t("title1")}</span>{" "}
                <span className="text-accent">{t("title2")}</span>
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-2"></div>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">{t("description")}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-10 w-10 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
