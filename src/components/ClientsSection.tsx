import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ClientsSection = () => {
  // Client logos array
  const clientLogos = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    src: `/images/clients/logo${i + 1}.png`,
    alt: `Client Logo ${i + 1}`,
  }));

  return (
    <section className="py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          {/* <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-px bg-accent"></div>
            <span className="mx-4 text-accent font-medium text-sm tracking-wider uppercase">
              Our Clients
            </span>
            <div className="w-8 h-px bg-accent"></div>
          </div> */}
          {/* <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Trusted by Industry Leaders
          </h2> */}
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are proud to work with leading companies and organizations across Saudi Arabia,
            delivering exceptional MEP solutions that exceed expectations.
          </p> */}
        </motion.div>

        {/* Clients Slider */}
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
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={1000}
            navigation={{
              nextEl: ".clients-next",
              prevEl: ".clients-prev",
            }}
            pagination={{
              el: ".clients-pagination",
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
              1280: {
                slidesPerView: 6,
                spaceBetween: 35,
              },
            }}
            className="clients-swiper">
            {clientLogos.map((client, index) => (
              <SwiperSlide key={client.id}>
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}>
                  {/* Logo Container */}
                  <div className="relative px-4 py-6 transition-all duration-500 group-hover:scale-110 h-32 flex items-center justify-center rounded-2xl">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl opacity-0 transition-opacity duration-500" />

                    {/* Logo Image */}
                    <div className="relative z-10 flex items-center justify-center h-full w-full">
                      <img
                        src={client.src}
                        alt={client.alt}
                        className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          {/* <div className="flex items-center justify-center mt-8 space-x-4">
            <button className="clients-prev w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-accent hover:text-white group">
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

            <div className="clients-pagination flex space-x-2"></div>

            <button className="clients-next w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-accent hover:text-white group">
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
      </div>
    </section>
  );
};

export default ClientsSection;
