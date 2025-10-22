"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle,
  Award,
  Users,
  Building2,
  Wind,
  Zap,
  Droplet,
  ShieldCheck,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const t = useTranslations("hero");
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  // Unsplash construction and MEP related images with details
  const backgroundImages = [
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center",
      title: "Modern Construction",
      subtitle: "Advanced Building Solutions",
      description:
        "State-of-the-art construction techniques with precision engineering and quality materials.",
      icon: Building2,
      stats: "500+ Projects",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&crop=center",
      title: "HVAC Systems",
      subtitle: "Climate Control Excellence",
      description:
        "Energy-efficient heating, ventilation, and air conditioning systems for optimal comfort.",
      icon: Wind,
      stats: "98% Efficiency",
    },
    {
      image: "/images/services-images/construction15.jpg",
      title: "Electrical Solutions",
      subtitle: "Power & Safety First",
      description:
        "Complete electrical infrastructure from high-voltage distribution to smart systems.",
      icon: Zap,
      stats: "24/7 Support",
    },
    {
      image: "/images/services-images/construction16.jpg",
      title: "Plumbing Systems",
      subtitle: "Water Management",
      description:
        "Advanced water supply and drainage systems with modern fixtures and sustainable technologies.",
      icon: Droplet,
      stats: "15+ Years",
    },
    {
      image: "/images/services-images/construction21.jpg",
      title: "Fire Safety",
      subtitle: "Protection & Prevention",
      description:
        "Comprehensive fire detection, suppression, and alarm systems meeting international standards.",
      icon: ShieldCheck,
      stats: "100% Compliant",
    },
  ];

  useEffect(() => {
    if (heroRef.current && imageRef.current) {
      gsap.to(imageRef.current, {
        y: 50,
        scale: 1.05,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Floating elements animation
    if (floatingElementsRef.current) {
      gsap.to(floatingElementsRef.current.children, {
        y: -20,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    // Auto-slide functionality - continuous switching
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change image every 3 seconds for continuous feel

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [t("features.support"), t("features.delivery"), t("features.quality")];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-muted/30 to-white">
      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}>
        <Button
          variant="default"
          size="icon"
          className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp className="w-6 h-6 text-white" />
        </Button>
      </motion.div>

      {/* Video Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-none rounded-lg overflow-hidden">
          <DialogHeader className="p-4 bg-gradient-to-r from-accent to-orange-500">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white text-xl font-bold">Watch Our Story </DialogTitle>
            </div>
          </DialogHeader>
          {/* Video Player - Replace VIDEO_ID_HERE with your actual YouTube video ID */}
          <div className="relative w-full bg-gray-800" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=1&rel=0&modestbranding=1&showinfo=0"
              title={t("video.title")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Modern construction site with advanced MEP systems"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        </div>

        {/* Floating Geometric Elements */}
        <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg rotate-45" />
          <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary/20 rounded-full" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl mt-20">
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 border border-accent/20 mb-1">
              <span className="text-sm font-medium text-primary">{t("badge")}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                {/* <span className="block text-accent">Black Pearls</span>
              <span className="block text-primary">Contracting Est.</span> */}
                <span className="block text-accent">{t("title")}</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("description")}
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("#contact")}>
                {t("cta.quote")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsVideoDialogOpen(true)}>
                {t("cta.work")} <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="relative rounded-3xl bg-white/80 overflow-hidden shadow-2xl">
                <motion.div
                  key={currentBackgroundIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full h-[500px] relative">
                  <Image
                    src={backgroundImages[currentBackgroundIndex].image}
                    alt="Modern construction and MEP systems"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentBackgroundIndex === 0}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

                {/* Details Overlay - Always Visible */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        {React.createElement(backgroundImages[currentBackgroundIndex].icon, {
                          className: "h-6 w-6 text-accent-foreground",
                        })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          {backgroundImages[currentBackgroundIndex].title}
                        </h3>
                        <p className="text-accent font-medium">
                          {backgroundImages[currentBackgroundIndex].subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      {backgroundImages[currentBackgroundIndex].description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-semibold">
                        {backgroundImages[currentBackgroundIndex].stats}
                      </span>
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => scrollToSection("#services")}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-10 left-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl" />
            <div className="absolute -z-10 bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>

      {/* Background Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:top-1/2 md:bottom-auto md:left-auto md:right-8 md:transform md:-translate-y-1/2 md:flex-col md:space-y-3 md:space-x-0 z-20 flex space-x-3">
        {backgroundImages.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentBackgroundIndex(index)}
            className={`w-2 h-2 md:w-1 md:h-4 rounded-full md:rounded-[2px] transition-all duration-300 ${
              currentBackgroundIndex === index
                ? "bg-accent scale-110 md:scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            title={slide.title}
          />
        ))}
      </div>
    </section>
  );
};
