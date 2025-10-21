import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  scope: string[];
  outcomes: string[];
}

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Residential Home",
      category: "Residential",
      location: "Riyadh, KSA",
      year: "May 15, 2023",
      image: "/images/hero-background.jpg",
      description:
        "Modern luxury home featuring sustainable design and smart home technology integration.",
      scope: ["Custom design", "Smart home systems", "Sustainable materials", "Landscaping"],
      outcomes: ["Energy efficient", "Modern aesthetics", "High-end finishes", "Smart automation"],
    },
    {
      id: 2,
      title: "Commercial Office Complex",
      category: "Commercial",
      location: "Jeddah, KSA",
      year: "March 22, 2023",
      image: "/images/section-background.webp",
      description:
        "State-of-the-art office building with advanced MEP systems and modern amenities.",
      scope: ["Office spaces", "Conference rooms", "Parking facility", "Cafeteria"],
      outcomes: ["Modern design", "Efficient layout", "Professional atmosphere", "High occupancy"],
    },
    {
      id: 3,
      title: "Shopping Mall Renovation",
      category: "Renovation",
      location: "Dammam, KSA",
      year: "August 10, 2023",
      image: "/images/hero-background.jpg",
      description: "Complete renovation of existing shopping mall with modern retail spaces.",
      scope: ["Interior redesign", "New storefronts", "Updated lighting", "Modern amenities"],
      outcomes: [
        "Increased foot traffic",
        "Modern appeal",
        "Better tenant satisfaction",
        "Higher revenue",
      ],
    },
    {
      id: 4,
      title: "Government Facility",
      category: "Government",
      location: "Riyadh, KSA",
      year: "December 5, 2023",
      image: "/images/section-background.webp",
      description:
        "Secure government facility with advanced security systems and modern infrastructure.",
      scope: ["Security systems", "Modern offices", "Meeting rooms", "Reception area"],
      outcomes: [
        "Enhanced security",
        "Professional environment",
        "Efficient operations",
        "Compliance certified",
      ],
    },
    {
      id: 5,
      title: "Industrial Warehouse",
      category: "Industrial",
      location: "Jubail, KSA",
      year: "June 18, 2023",
      image: "/images/hero-background.jpg",
      description: "Large-scale industrial warehouse with advanced logistics and storage systems.",
      scope: ["Storage systems", "Loading docks", "Office spaces", "Security systems"],
      outcomes: ["High capacity", "Efficient operations", "Secure storage", "Cost effective"],
    },
    {
      id: 6,
      title: "Educational Campus",
      category: "Educational",
      location: "Mecca, KSA",
      year: "September 12, 2023",
      image: "/images/section-background.webp",
      description: "Modern educational facility with classrooms, labs, and recreational areas.",
      scope: ["Classrooms", "Laboratories", "Library", "Sports facilities"],
      outcomes: [
        "Modern learning environment",
        "Advanced facilities",
        "Student satisfaction",
        "Academic excellence",
      ],
    },
  ];

  return (
    <section id="projects" ref={ref} className="section-padding white-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Crafting Spaces, Building Dreams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio showcasing high-quality, inspiring spaces from luxury homes to
            commercial buildings. Each project reflects our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}>
              <div className="project-card">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium mb-2">Click to view details</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </span>
                  </div>
                  <Badge className="mt-3">{project.category}</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Project Scope</h4>
                      <ul className="space-y-2">
                        {selectedProject.scope.map((item) => (
                          <li key={item} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-accent">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {selectedProject.outcomes.map((item) => (
                          <li key={item} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{selectedProject.year}</span>
                    </div>
                    <Badge variant="secondary">{selectedProject.category}</Badge>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
