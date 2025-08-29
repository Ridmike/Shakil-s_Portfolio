import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "./particles-background";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PERSONAL_INFO } from "@/lib/constants";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <ParticlesBackground />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shakil
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-8 text-slate-600 dark:text-slate-300"
          >
            I build smart, intuitive mobile experiences
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-2xl text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Github />
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-2xl text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Linkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-2xl text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <FileText />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white rounded-full"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("#about")}
      >
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
