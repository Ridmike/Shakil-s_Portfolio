import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Users, 
  Lightbulb, 
  Clock, 
  Crown, 
  Brain 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SKILLS } from "@/lib/constants";

const iconMap = {
  MessageCircle,
  Users,
  Lightbulb,
  Clock,
  Crown,
  Brain
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
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
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            Technologies I work with
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white"
            >
              Technical Skills
            </motion.h3>
            <div className="space-y-6">
              {SKILLS.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white"
            >
              Soft Skills
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.soft.map((skill, index) => {
                const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                      <CardContent className="p-4 text-center">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-medium text-slate-900 dark:text-white">
                          {skill.name}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
