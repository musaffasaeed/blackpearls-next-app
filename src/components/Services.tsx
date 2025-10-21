"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Zap, ShieldCheck, Droplet, Video, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hvacImage from "@/assets/assets/hvac-service.jpg";
import electricalImage from "@/assets/assets/electrical-service.jpg";
import fireImage from "@/assets/assets/fire-safety-service.jpg";
import plumbingImage from "@/assets/assets/plumbing-service.jpg";
import securityImage from "@/assets/assets/security-service.jpg";
import maintenanceImage from "@/assets/assets/maintenance-service.jpg";

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Wind,
      title: "HVAC Solutions",
      description:
        "Energy-efficient climate control systems designed for optimal comfort and minimized operational costs. Code-compliant installations with precision engineering.",
      image: hvacImage,
      stats: "98% Efficiency",
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description:
        "Complete electrical infrastructure from high-voltage distribution to low-current systems, ensuring reliable and safe power delivery across all facilities.",
      image: electricalImage,
      stats: "24/7 Support",
    },
    {
      icon: ShieldCheck,
      title: "Fire Safety Solutions",
      description:
        "Comprehensive fire detection, suppression, and alarm systems that meet international safety standards and local building codes.",
      image: fireImage,
      stats: "100% Compliant",
    },
    {
      icon: Droplet,
      title: "Plumbing Solutions",
      description:
        "Advanced water supply and drainage systems with modern fixtures, efficient water management, and sustainable plumbing technologies.",
      image: plumbingImage,
      stats: "15+ Years",
    },
    {
      icon: Video,
      title: "Surveillance & Security",
      description:
        "Integrated CCTV and access control systems providing comprehensive security monitoring and protection for your assets.",
      image: securityImage,
      stats: "360° Coverage",
    },
    {
      icon: Wrench,
      title: "Maintenance Contracts",
      description:
        "Proactive maintenance programs ensuring peak performance, minimizing downtime, and extending the lifespan of all building systems.",
      image: maintenanceImage,
      stats: "Proactive Care",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" ref={ref} className="section-padding white-bg relative">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <img
          src="/images/section-background.webp"
          alt="Architectural blueprint pattern"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Background large text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-[8rem] lg:text-[12rem] font-extrabold text-primary/5 tracking-tighter select-none">
                SERVICES
              </h2>
            </div>

            {/* Main heading */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-sm font-semibold text-accent">Professional Excellence</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                <span className="text-primary">OUR</span>{" "}
                <span className="text-accent">SERVICES</span>
              </h2>

              {/* Decorative Line */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-accent rounded-full mx-4" />
              </div>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Delivering comprehensive MEP solutions with cutting-edge technology and unmatched
                expertise across Saudi Arabia's construction landscape.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group">
              <div className="relative bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100/50 hover:border-0 h-full flex flex-col backdrop-blur-sm">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
                </div>

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    width={400}
                    height={224}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-accent/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-bold text-white">{service.stats}</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-accent rounded-full opacity-60" />
                  <div className="absolute top-8 left-8 w-1 h-1 bg-white rounded-full opacity-40" />
                </div>

                {/* Content Section */}
                <div className="relative p-8 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed flex-1 text-base">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full h-12 border-2 border-accent/20 text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group-hover:shadow-lg rounded-xl font-semibold">
                      <span className="flex items-center justify-center">
                        Discover More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
