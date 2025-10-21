"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Briefcase,
  Home,
  CheckCircle,
  Phone,
  Award,
  Users,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const citySkylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      sectionRef.current &&
      imageRef.current &&
      contentRef.current &&
      servicesRef.current &&
      badgeRef.current &&
      citySkylineRef.current
    ) {
      // GSAP ScrollTrigger animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // City skyline animation
      gsap.fromTo(
        citySkylineRef.current.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 0.05,
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image animation
      tl.fromTo(
        imageRef.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Badge animation
      tl.fromTo(
        badgeRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Content animation
      tl.fromTo(
        contentRef.current.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Services animation
      tl.fromTo(
        servicesRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5,
      });
    }
  }, []);
  const services = [
    {
      icon: Award,
      title: "Certified Expertise",
      description:
        "MEP engineers and technicians certified to regional and international standards.",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear project timelines, reporting, and single-point contact.",
    },
    {
      icon: Users,
      title: "Safety & Compliance",
      description: "NFPA, SASO, and Saudi building code aligned processes and documentation.",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Commissioning, testing, and handover with complete documentation.",
    },
  ];

  return (
    <section ref={sectionRef} className="pb-10 bg-white relative overflow-hidden">
      {/* Background City Skylines */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={citySkylineRef} className="absolute bottom-0 left-0 w-full h-40 opacity-5">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <rect x="0" y="80" width="40" height="30" fill="#1A1A1A" />
            <rect x="50" y="60" width="30" height="50" fill="#1A1A1A" />
            <rect x="90" y="70" width="35" height="40" fill="#1A1A1A" />
            <rect x="135" y="50" width="25" height="60" fill="#1A1A1A" />
            <rect x="170" y="75" width="40" height="35" fill="#1A1A1A" />
            <rect x="220" y="65" width="30" height="45" fill="#1A1A1A" />
            <rect x="260" y="80" width="35" height="30" fill="#1A1A1A" />
            <rect x="305" y="55" width="25" height="55" fill="#1A1A1A" />
            <rect x="340" y="70" width="30" height="40" fill="#1A1A1A" />
            <rect x="380" y="60" width="35" height="50" fill="#1A1A1A" />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-6 h-6 opacity-20 floating-element">
        <div className="w-full h-full bg-accent rotate-45"></div>
      </div>
      <div className="absolute top-20 right-8 w-4 h-4 opacity-15 floating-element">
        <div className="w-full h-full bg-primary rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-12 w-3 h-3 opacity-10 floating-element">
        <div className="w-full h-full bg-accent rotate-12"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div ref={imageRef} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1564182873128-5052241315bb?q=80&w=1200&h=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="MEP contractor working on HVAC and electrical systems"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent badge */}
            <div
              ref={badgeRef}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
              <div className="text-xs font-black font-heading uppercase tracking-wider text-primary">
                MEP Excellence
              </div>
              <div className="text-[10px] text-muted-foreground">
                HVAC • Fire • Electrical • Plumbing
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-px bg-accent"></div>
              <span className="mx-4 text-accent font-medium text-sm tracking-wider">About Us</span>
              <div className="w-8 h-px bg-accent"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-wider text-primary leading-tight">
              LEADING MEP CONTRACTOR DELIVERING END-TO-END SOLUTIONS{" "}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Black Pearls Contracting, we take pride in delivering fully integrated construction
              solutions that begin with strong civil foundations and extend seamlessly into advanced
              MEP systems. From structural works, finishing, and infrastructure development to
              electrical, HVAC, plumbing, and safety systems — every element is designed and
              executed as part of a single, coordinated process.
            </p>

            {/* Services Grid */}
            <div ref={servicesRef} className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 text-sm">{service.title}</h4>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
