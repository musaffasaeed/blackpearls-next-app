import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hammer, Clock, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Hammer,
      title: "Expert Craftsmanship",
      description: "Professional construction with attention to detail",
    },
    {
      icon: Clock,
      title: "On-Time, Within Budget",
      description: "Reliable project delivery and cost management",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Modern techniques and sustainable practices",
    },
    {
      icon: Users,
      title: "Client-Centered Approach",
      description: "Dedicated to exceeding client expectations",
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
                <h3 className="text-sm font-medium text-primary mb-2">About Us</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Building Your Vision, Crafting Your Future
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  At Black Pearls Contracting, we take pride in delivering fully integrated
                  construction solutions that begin with strong civil foundations and extend
                  seamlessly into advanced MEP systems. From structural works, finishing, and
                  infrastructure development to electrical, HVAC, plumbing, and safety systems —
                  every element is designed and executed as part of a single, coordinated process.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  Our multidisciplinary team of engineers, designers and technicians ensures smooth
                  project delivery from concept to completion, whether it's for residential
                  complexes, commercial spaces, or government facilities. By combining structural
                  integrity with smart building services, we create environments that are not only
                  durable and functional but also efficient, safe, and future-ready.
                </p>
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
