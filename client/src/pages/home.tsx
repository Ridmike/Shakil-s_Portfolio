import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ProjectModal } from "@/components/project-modal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection onProjectClick={handleProjectClick} />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projectId={selectedProject}
      />
    </div>
  );
}
