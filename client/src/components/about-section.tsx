import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { PERSONAL_INFO, MILESTONES } from "@/lib/constants";
import about from "@/../../attached_assets/about.jpg"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
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
            About Me
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            Passionate about creating innovative mobile solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="w-96 h-96 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
              <img
                src={about}
                alt="Modern developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInRight}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.about.split('.').slice(0, 2).join('.')} .
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.about.split('.').slice(2).join('.')}
              </p>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
