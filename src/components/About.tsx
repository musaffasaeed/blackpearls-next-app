import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hammer, Clock, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("about");

  const features = [
    {
      icon: Hammer,
      title: t("features.craftsmanship.title"),
      description: t("features.craftsmanship.description"),
    },
    {
      icon: Clock,
      title: t("features.budget.title"),
      description: t("features.budget.description"),
    },
    {
      icon: Lightbulb,
      title: t("features.innovation.title"),
      description: t("features.innovation.description"),
    },
    {
      icon: Users,
      title: t("features.client.title"),
      description: t("features.client.description"),
    },
  ];

  return (
    <section id="about" ref={ref} className="section-padding orange-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            <div className="relative">
              <Image
                src="/images/section-background.webp"
                alt="Professional construction team member"
                width={400}
                height={384}
                className="w-full h-96 object-cover rounded-full shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Right Content - Text and Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8">
                <h3 className="text-sm font-medium text-primary mb-2">{t("subtitle")}</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("title")}</h2>
                <p className="text-lg text-white/90 leading-relaxed">{t("description")}</p>
                <p className="text-lg text-white/90 leading-relaxed mt-4">{t("description2")}</p>
              </motion.div>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center">
                    <div className="feature-icon">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
