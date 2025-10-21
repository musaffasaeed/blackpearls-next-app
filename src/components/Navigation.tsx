"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/bp-logo.png";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const t = useTranslations("navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("about"), href: "#about" },
    { name: t("services"), href: "#services" },
    { name: t("portfolio"), href: "#projects" },
    { name: t("team"), href: "#team" },
    { name: t("testimonials"), href: "#testimonials" },
    { name: t("contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="Black Pearls Contracting"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            <span className="text-xl font-bold text-primary">Black Pearls</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-primary hover:text-accent transition-colors duration-200 font-medium">
                {link.name}
              </a>
            ))}

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 ml-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4 text-primary" />
              </a>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t("getQuote")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border shadow-lg">
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-primary hover:text-accent transition-colors duration-200 font-medium py-2">
                  {link.name}
                </a>
              ))}

              {/* Mobile Social Media Icons */}
              <div className="flex items-center justify-center space-x-4 py-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                  <Youtube className="h-5 w-5 text-primary" />
                </a>
              </div>

              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Get a quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
