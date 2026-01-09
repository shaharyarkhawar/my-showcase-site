import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Angular", "JavaScript", "TypeScript", "Redux"],
  },
  {
    title: "Backend Development",
    skills: ["PHP", "Node.js", "Python", "Django", "Flask"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Lambda", "CloudWatch"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "RESTful APIs", "Code Review"],
  },
  {
    title: "Soft Skills",
    skills: ["Team Leadership", "Collaboration", "Problem Solving", "Mentoring"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold font-heading mb-12">
          <span className="text-primary font-normal">02.</span>
          Skills & Technologies
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-lg p-6"
            >
              <h3 className="font-heading font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-background/50 text-foreground rounded-md border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;