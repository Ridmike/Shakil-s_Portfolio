import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-slate-300">
              &copy; 2024 {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
