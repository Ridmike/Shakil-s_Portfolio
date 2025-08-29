import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PROJECTS } from "@/lib/constants";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

export function ProjectModal({ isOpen, onClose, projectId }: ProjectModalProps) {
  const project = projectId ? PROJECTS.find(p => p.id === projectId) : null;

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Project Overview
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  My Role
                </h3>
                <p className="text-primary font-medium text-lg mb-4">
                  {project.role}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <ArrowRight className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <Button className="flex items-center space-x-2 bg-primary hover:bg-primary/90">
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
