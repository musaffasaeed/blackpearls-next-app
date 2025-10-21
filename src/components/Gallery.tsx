"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Camera, ArrowRight, ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const itemsPerPage = 6;

  // Gallery images from services-images folder
  const galleryImages = [
    "/images/services-images/construction1.jpg",
    "/images/services-images/construction18.jpg",
    "/images/services-images/construction4.jpg",
    "/images/services-images/construction15.jpg",
    "/images/services-images/construction21.jpg",
    "/images/services-images/construction5.jpg",
    "/images/services-images/construction6.jpg",
    "/images/services-images/construction7.jpg",
    "/images/services-images/constructio8.jpg",
    "/images/services-images/construction9.jpg",
    "/images/services-images/construction10.jpg",
    "/images/services-images/construction11.jpg",
    "/images/services-images/construction12.jpg",
    "/images/services-images/construction13.jpg",
    "/images/services-images/construction14.jpg",
    "/images/services-images/construction16.jpg",
    "/images/services-images/construction3.jpg",
    "/images/services-images/construction17.jpg",
    "/images/services-images/construction19.jpg",
    "/images/services-images/construction2.jpg",
    "/images/services-images/construction20.jpg",
  ];

  const filteredImages = galleryImages;

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Auto-pagination functionality with enhanced timing
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentPage((prevPage) => {
  //         if (prevPage >= totalPages) {
  //           return 1; // Reset to first page when reaching the end
  //         }
  //         return prevPage + 1;
  //       });
  //     }, 4000); // Switch every 4 seconds for better viewing experience

  //     return () => clearInterval(interval);
  //   }, [totalPages]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" ref={ref} className="section-padding relative">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-1">
          <div className="relative">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="text-primary">PROJECT</span>{" "}
              <span className="text-accent">GALLERY</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-accent rounded-full mx-4" />
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed projects showcasing excellence in construction, MEP
              systems, and innovative building solutions across Saudi Arabia.
            </p>
          </div>
        </motion.div>

        {/* Gallery Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white overflow-hidden">
          {/* Gallery Header */}
          <div className="flex items-center justify-between p-8 border-b border-gray-100">
            {/* Title */}
            <h3 className="text-3xl font-bold text-primary">Gallery</h3>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-4">
              <motion.span
                key={currentPage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-muted-foreground font-medium">
                {currentPage} of {totalPages}
              </motion.span>
              <div className="flex space-x-2">
                <motion.button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                  }`}>
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>
                <motion.button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                  }`}>
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentImages.map((image, index) => (
                  <motion.div
                    key={`${currentPage}-${startIndex + index}`}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                    className="group cursor-pointer"
                    onClick={() => handleImageClick(image)}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.6, ease: "easeOut" },
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full">
                        <Image
                          src={image}
                          alt={`Construction project ${startIndex + index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>

                      {/* Enhanced Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Zoom Icon */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                          <ZoomIn className="h-8 w-8 text-primary" />
                        </div>
                      </motion.div>

                      {/* Loading shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl w-full p-10 bg-transparent border-none">
          <div className="relative">
            {/* Close Button */}
            <motion.button
              onClick={closeDialog}
              className="absolute top-4 right-4 z-50 border-0 outline-none focus:outline-none focus:ring-0 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <X className="h-6 w-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden shadow-2xl">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Full size construction project"
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain bg-white"
                  priority
                />
              )}
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
