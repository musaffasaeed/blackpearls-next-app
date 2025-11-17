"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export const Testimonials = () => {
  const ref = useRef(null);
  const t = useTranslations("testimonials");

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: t("testimonial1.name"),
      image: "/images/section-background.webp",
      author: t("testimonial1.author"),
      rating: 5,
      text: t("testimonial1.text"),
    },
    {
      name: t("testimonial2.name"),
      image: "/images/hero-background.jpg",
      author: t("testimonial2.author"),
      rating: 5,
      text: t("testimonial2.text"),
    },
    {
      name: t("testimonial3.name"),
      image: "/images/section-background.webp",
      author: t("testimonial3.author"),
      rating: 5,
      text: t("testimonial3.text"),
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(id);
  }, [isPaused, testimonials.length]);

  return (
    <section className="pb-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">{t("subtitle")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("title")}</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <Card className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/90 backdrop-blur-md shadow-xl">
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-orange-400 to-accent" />
              <CardContent
                className="pt-12 pb-10"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-accent" />
                </div>

                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center">
                  <p className="text-xl text-muted-foreground mb-8 italic leading-relaxed">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div>
                    <p className="font-bold text-lg bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-muted-foreground">{testimonials[activeIndex].author}</p>
                  </div>
                </motion.div>

                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "bg-accent w-8" : "bg-gray-300 w-3"
                      }`}
                      aria-label={`Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`p-4 rounded-xl text-left transition-all ${
                  index === activeIndex
                    ? "bg-accent/10 border border-accent shadow-md"
                    : "bg-muted/50 border border-transparent hover:border-muted/70"
                }`}>
                <p className="font-semibold mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.author}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
