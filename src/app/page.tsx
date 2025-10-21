"use client";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ClientTestimonials } from "@/components/ClientTestimonials";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <PartnersSection />
        <AboutSection />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Team />
        <FAQ />
        <ContactForm />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
