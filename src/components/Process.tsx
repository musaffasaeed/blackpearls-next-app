import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Hammer, Cpu, CheckCircle, Key, HeadphonesIcon } from "lucide-react";

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Lightbulb,
      title: "Design & Planning",
      description: "Collaborative design phase with detailed engineering drawings and specifications tailored to your needs.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Hammer,
      title: "Civil Works",
      description: "Strong structural foundations, concrete works, and infrastructure development with precision execution.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Cpu,
      title: "MEP Integration",
      description: "Seamless installation of electrical, mechanical, plumbing, and fire safety systems in coordinated phases.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Testing & Commissioning",
      description: "Rigorous quality checks, system testing, and performance validation to ensure everything works flawlessly.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Key,
      title: "Handover & Documentation",
      description: "Complete project documentation, training for facility teams, and smooth transition to operations.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Continuous maintenance contracts and technical support to keep your systems running at peak performance.",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section id="process" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we ensure seamless delivery at every stage
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
