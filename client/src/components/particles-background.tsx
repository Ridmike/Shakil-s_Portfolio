import { motion } from "framer-motion";

const particles = [
  { id: 1, size: 8, color: "bg-primary/20", delay: 0, top: "20%", left: "10%" },
  { id: 2, size: 12, color: "bg-secondary/20", delay: 1, top: "60%", left: "80%" },
  { id: 3, size: 4, color: "bg-accent/30", delay: 2, top: "30%", left: "70%" },
  { id: 4, size: 8, color: "bg-primary/15", delay: 1.5, top: "80%", left: "20%" },
  { id: 5, size: 16, color: "bg-secondary/10", delay: 0.5, top: "40%", left: "90%" },
  { id: 6, size: 6, color: "bg-accent/20", delay: 2.5, top: "10%", left: "60%" },
  { id: 7, size: 10, color: "bg-primary/10", delay: 1.8, top: "70%", left: "50%" },
];

export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
