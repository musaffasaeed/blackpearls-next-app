"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experts = [
    {
      name: "Ahmed Al-Rashid",
      title: "Site Supervisor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
    {
      name: "Sarah Al-Mansouri",
      title: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    },
  ];

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
            <h3 className="text-sm font-medium text-primary mb-2">Meet Our Experts</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Building with Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced professionals brings excellence and innovation to every
              project. With years of expertise in construction and project management, we ensure
              your vision becomes reality.
            </p>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Let's Talk Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right Content - Expert Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="team-card text-center">
                <div className="relative mb-4">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">{expert.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{expert.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
