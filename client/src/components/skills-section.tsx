import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { SKILLS } from "@/lib/constants";

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    if (inView) {
      SKILLS.technical.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, index]);
        }, index * 100);
      });
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 bg-slate-50/30 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A comprehensive toolkit of modern technologies and frameworks
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.technical.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <motion.span 
                  className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-primary font-semibold transition-colors"
                  initial={{ opacity: 0 }}
                  animate={animatedSkills.includes(index) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: animatedSkills.includes(index) ? `${skill.level}%` : '0%'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
