import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const timelineData = [
    {
      year: "September 2022 - Present",
      title: "Computer Science Bachelor Degree",
      institution: "NSBM Green University",
      description: "Currently pursuing a Bachelor of Computer Science, affiliated with the University of Plymouth, UK.",
      status: "current",
    },
    {
      year: "2021 - 2022",
      title: "Certification Course in English",
      institution: "General Sir John Kotelawala Defence University",
      description: "Completed advanced English language certification.",
      status: "completed",
    },
    {
      year: "2021 - 2022",
      title: "Certificate Course in Computer Applications (CCCA)",
      institution: "University Of Colombo",
      description: "Completed foundational computer applications certification.",
      status: "completed",
    },
    {
      year: "2019 - 2022",
      title: "Advanced Level Examinations",
      institution: "Boys' School, Malabe",
      description: "Completed Advanced Level examinations with focus on Science stream.",
      status: "completed",
    },
    {
      year: "January 2012 - December 2017",
      title: "Ordinary Level Examinations",
      institution: "Carey College",
      description: "Completed Ordinary Level examinations with strong academic performance.",
      status: "completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
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
            Education
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            My academic journey and achievements
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 w-0.5 bg-slate-300 dark:bg-slate-600 h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={index}
                  className="flex items-start relative group"
                >
                  {/* Marker */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center ${
                      item.status === 'current' 
                        ? 'bg-primary text-white' 
                        : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400'
                    } shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-8 flex-1">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-600">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {item.year}
                        </span>
                        {item.status === 'current' && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {item.institution}
                      </h4>
                      
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}