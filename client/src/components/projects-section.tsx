import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";

interface ProjectsSectionProps {
  onProjectClick: (projectId: string) => void;
}

export function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            My Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            Innovative mobile solutions that make a difference
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => onProjectClick(project.id)}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 px-2 py-1 rounded-full">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {project.year}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    View Details →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
