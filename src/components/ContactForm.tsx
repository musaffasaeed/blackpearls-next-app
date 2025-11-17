"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contactInfo.email.title"),
      subtitle: t("contactInfo.email.subtitle"),
      content: "muhammadmusaffa@theblackpearlsa.com",
      link: "mailto:muhammadmusaffa@theblackpearlsa.com",
    },
    {
      icon: MapPin,
      title: t("contactInfo.address.title"),
      subtitle: t("contactInfo.address.subtitle"),
      content: "Mishrifah District, 6740, Jeddah 23331, Saudi Arabia",
      link: null,
    },
    {
      icon: Phone,
      title: t("contactInfo.phone.title"),
      subtitle: t("contactInfo.phone.subtitle"),
      content: "+966507116423",
      link: "tel:+966507116423",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding white-bg relative">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <img
          src="/images/section-background.webp"
          alt="Architectural blueprint pattern"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Reach out to us for consultations, inquiries, or to
            discuss your construction needs. We're here to help bring your vision to life.
          </p> */}
          <div className="relative text-center mb-12">
            {/* Background large text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-[10rem] lg:text-[14rem] font-extrabold text-primary/10 tracking-tighter select-none">
                {t("backgroundText")}
              </h2>
            </div>
            {/* Main heading */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight pt-6">
                <span className="text-primary">{t("title1")}</span>{" "}
                <span className="text-accent">{t("title2")}</span>
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-2"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {t("description")}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{info.subtitle}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-accent transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}>
            {isSuccess ? (
              <div className="bg-white rounded-2xl p-12 shadow-md text-center border border-border/20">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{t("success.title")}</h3>
                <p className="text-muted-foreground">{t("success.message")}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl p-8 shadow-md space-y-6 border border-border/20">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    {t("form.name.label")}
                  </label>
                  <Input
                    id="name"
                    {...register("name", { required: t("form.name.error") })}
                    placeholder={t("form.name.placeholder")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    {t("form.email.label")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: t("form.email.error"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("form.email.invalid"),
                      },
                    })}
                    placeholder={t("form.email.placeholder")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    {t("form.phone.label")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: t("form.phone.error") })}
                    placeholder={t("form.phone.placeholder")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {t("form.message.label")}
                  </label>
                  <Textarea
                    id="message"
                    {...register("message", { required: t("form.message.error") })}
                    placeholder={t("form.message.placeholder")}
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}>
                  {isSubmitting ? t("form.submitting") : t("form.submit")}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
