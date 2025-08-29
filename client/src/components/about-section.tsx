import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { PERSONAL_INFO, MILESTONES } from "@/lib/constants";

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
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace"
              className="rounded-xl shadow-lg w-full h-auto"
            />
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

            {/* Education Timeline */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                Education & Milestones
              </h3>
              <div className="space-y-4">
                {MILESTONES.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div 
                      className={`w-4 h-4 rounded-full mt-2 ${
                        milestone.color === 'primary' ? 'bg-primary' :
                        milestone.color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                      }`}
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {milestone.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {milestone.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
