import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/bp-logo.png";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");

  const quickLinks = [
    { name: t("links.about"), href: "#about" },
    { name: t("links.services"), href: "#services" },
    { name: t("links.projects"), href: "#projects" },
    { name: t("links.process"), href: "#process" },
    { name: t("links.safety"), href: "#safety" },
    { name: t("links.contact"), href: "#contact" },
  ];

  const services = [
    t("services.hvac"),
    t("services.electrical"),
    t("services.fire"),
    t("services.plumbing"),
    t("services.security"),
    t("services.maintenance"),
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={logo}
                alt="Black Pearls Contracting"
                className="h-12 w-auto brightness-0 invert"
                width={48}
                height={48}
              />
              <span className="text-lg font-bold">{t("companyName")}</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">{t("description")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("quickLinks.title")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("services.title")}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#services");
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("contact.title")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+966XXXXXXXXX"
                    className="text-primary-foreground/80 hover:text-accent transition-colors">
                    +966 XX XXX XXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:info@blackpearls.sa"
                    className="text-primary-foreground/80 hover:text-accent transition-colors">
                    info@blackpearls.sa
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-primary-foreground/80">Riyadh, Saudi Arabia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} {t("copyright")}
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors">
                {t("privacy")}
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors">
                {t("terms")}
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors">
                {t("cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
