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

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What MEP services do you provide?",
      answer:
        "We provide comprehensive MEP services including HVAC systems, electrical installations, fire safety systems, plumbing solutions, surveillance & security systems, and maintenance contracts. Our integrated approach ensures seamless coordination between all systems.",
    },
    {
      question: "Do you work on both residential and commercial projects?",
      answer:
        "Yes, we handle projects across all sectors including residential complexes, commercial buildings, government facilities, and industrial projects. Our team has experience with projects ranging from single-family homes to large-scale developments.",
    },
    {
      question: "What certifications and standards do you follow?",
      answer:
        "We comply with NFPA, SASO, and Saudi building codes. Our team consists of certified engineers and technicians who maintain international standards in all our projects.",
    },
    {
      question: "How long does a typical MEP project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical residential project takes 3-6 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the planning phase and maintain strict adherence to schedules.",
    },
    {
      question: "Do you provide maintenance services after project completion?",
      answer:
        "Yes, we offer comprehensive maintenance contracts to ensure optimal performance of all MEP systems. Our 24/7 support team provides preventive maintenance, emergency repairs, and system optimization services.",
    },
    {
      question: "What is your project delivery process?",
      answer:
        "Our process includes initial consultation, detailed planning and design, procurement, installation, testing and commissioning, and final handover with complete documentation. We maintain transparent communication throughout the project lifecycle.",
    },
    {
      question: "Do you offer design and engineering services?",
      answer:
        "Yes, our in-house engineering team provides complete design and engineering services. We create detailed MEP drawings, specifications, and 3D models to ensure accurate implementation and coordination with other trades.",
    },
    {
      question: "What makes Black Pearls different from other MEP contractors?",
      answer:
        "Our integrated approach, certified expertise, 24/7 support, and commitment to quality set us apart. We combine structural integrity with smart building services, ensuring cohesive, compliant, and future-ready solutions for every project.",
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
              <span className="mx-4 text-accent font-medium text-sm tracking-wider">FAQ</span>
              <div className="w-8 h-px bg-accent"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              <span className="text-primary">FREQUENTLY</span>{" "}
              <span className="text-accent">ASKED QUESTIONS</span>
            </h2>

            <div className="w-16 h-1 bg-accent mx-auto mb-2"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions about our MEP services
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
