import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold font-heading mb-12">
          <span className="text-primary font-normal">04.</span>
          Education
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-lg p-8 flex items-start gap-6"
        >
          <div className="p-4 bg-primary/10 rounded-lg">
            <GraduationCap className="text-primary" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold mb-2">
              Bachelor's in Computer Engineering
            </h3>
            <p className="text-primary font-medium mb-2">
              National University of Sciences and Technology (NUST)
            </p>
            <p className="text-muted-foreground">2017 - 2021</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;