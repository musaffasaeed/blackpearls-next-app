"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("faq");

  const faqs = [
    {
      question: t("questions.mepServices.question"),
      answer: t("questions.mepServices.answer"),
    },
    {
      question: t("questions.projectTypes.question"),
      answer: t("questions.projectTypes.answer"),
    },
    {
      question: t("questions.certifications.question"),
      answer: t("questions.certifications.answer"),
    },
    {
      question: t("questions.projectTimeline.question"),
      answer: t("questions.projectTimeline.answer"),
    },
    {
      question: t("questions.maintenanceServices.question"),
      answer: t("questions.maintenanceServices.answer"),
    },
    {
      question: t("questions.deliveryProcess.question"),
      answer: t("questions.deliveryProcess.answer"),
    },
    {
      question: t("questions.designServices.question"),
      answer: t("questions.designServices.answer"),
    },
    {
      question: t("questions.differentiation.question"),
      answer: t("questions.differentiation.answer"),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            {/* Header */}
            <div className="flex items-center mb-4 mt-14">
              <div className="w-8 h-px bg-accent"></div>
              <span className="mx-4 text-accent font-medium text-sm tracking-wider">
                {t("subtitle")}
              </span>
              <div className="w-8 h-px bg-accent"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              <span className="text-primary">{t("title1")}</span>{" "}
              <span className="text-accent">{t("title2")}</span>
            </h2>

            <div className="w-16 h-1 bg-accent mx-auto mb-2"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("description")}
            </p>
          </motion.div>

          {/* Right Content - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-accent/50">
                  <AccordionTrigger className="px-6 py-5 hover:text-accent text-left font-semibold group">
                    <span className="text-lg group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    <div className="pt-2 border-t border-gray-100">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
