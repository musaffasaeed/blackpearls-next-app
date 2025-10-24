import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import Image from "next/image";

const PartnersSection = () => {
  const t = useTranslations("partners");

  // Partner logos array
  const partnerLogos = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `/images/partners/partner${i + 1}.png`,
    alt: `Partner Logo ${i + 1}`,
  }));

  return (
    <section className="pb-20 pt-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Background large text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-[6rem] lg:text-[10rem] font-extrabold text-primary/5 tracking-tighter select-none">
                {t("backgroundText")}
              </h2>
            </div>

            {/* Main heading */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-sm font-semibold text-accent">{t("badge")}</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="text-primary">{t("title1")}</span>{" "}
                <span className="text-accent">{t("title2")}</span>
              </h2>

              {/* Decorative Line */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-accent rounded-full mx-4" />
              </div>

              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("description")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Partners Slider */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={1200}
            navigation={{
              nextEl: ".partners-next",
              prevEl: ".partners-prev",
            }}
            pagination={{
              el: ".partners-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="partners-swiper">
            {partnerLogos.map((partner, index) => (
              <SwiperSlide key={partner.id}>
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}>
                  {/* Partner Card */}
                  <div className="relative px-4 py-6 transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-1 overflow-hidden h-24 flex items-center justify-center">
                    {/* Animated Background Gradient */}

                    {/* Logo Container */}
                    <div className="relative z-10 flex items-center justify-center h-full w-full bg-transparent">
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={120}
                        height={60}
                        className="max-h-full max-w-full object-contain transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Partner Info */}
                    {/* <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent mb-2" />
                      <div className="text-xs font-medium text-muted-foreground">
                        Trusted Partner
                      </div>
                    </div> */}

                    {/* Animated Border Ring */}
                    {/* <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent/40 transition-all duration-700" /> */}

                    {/* Hover Glow */}
                    {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" /> */}
                  </div>

                  {/* Floating Particles */}
                  {/* <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-spin" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping" /> */}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          {/* <div className="flex items-center justify-center mt-8 space-x-4">
            <button className="partners-prev w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-accent hover:text-white group">
              <svg
                className="w-6 h-6 text-accent group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="partners-pagination flex space-x-2"></div>

            <button className="partners-next w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-accent hover:text-white group">
              <svg
                className="w-6 h-6 text-accent group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div> */}
        </motion.div>

        {/* Partnership Benefits */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          {[
            {
              icon: "🤝",
              title: "Quality Assurance",
              desc: "Premium materials and certified processes",
            },
            { icon: "⚡", title: "Innovation", desc: "Latest technology and modern solutions" },
            { icon: "🛡️", title: "Reliability", desc: "Dependable partnerships and support" },
            { icon: "🚀", title: "Growth", desc: "Continuous improvement and expansion" },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 hover:border-accent/20 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default PartnersSection;
