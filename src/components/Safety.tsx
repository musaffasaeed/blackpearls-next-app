import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, FileCheck, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Safety = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      icon: Shield,
      title: "Safety Standards",
      description:
        "ISO 45001 certified occupational health and safety management systems ensuring zero-harm work environments.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Quality management systems guaranteeing consistent excellence in every project phase.",
    },
    {
      icon: FileCheck,
      title: "Building Codes",
      description:
        "Full compliance with Saudi Building Code (SBC) and international standards for civil and MEP systems.",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description:
        "Our team holds industry certifications and undergoes regular safety training and competency assessments.",
    },
  ];

  return (
    <section id="safety" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Safety & Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your safety is our top priority, backed by rigorous standards and certifications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-md border border-border/50">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every project we undertake adheres to the highest safety protocols and quality
              standards. Our systematic approach to risk management, regular audits, and continuous
              improvement ensures that we deliver projects that not only meet but exceed regulatory
              requirements and client expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
