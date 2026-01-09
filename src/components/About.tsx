import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold font-heading mb-8">
          <span className="text-primary font-normal">01.</span>
          About Me
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Lead Software Engineer with over 3 years of experience in designing,
              developing, and implementing innovative software solutions. I have a proven
              track record of leading cross-functional teams to deliver high-quality
              projects within tight deadlines.
            </p>
            <p>
              My journey includes developing robust systems such as{" "}
              <span className="text-primary">Inventory Management Systems</span>,{" "}
              <span className="text-primary">Loyalty Programs</span>,{" "}
              <span className="text-primary">Property Management Systems</span>, and{" "}
              <span className="text-primary">Restaurant POS Systems</span>—all driving
              operational efficiency and enhancing customer engagement.
            </p>
            <p>
              I'm proficient in integrating modern technologies and methodologies to create
              scalable, user-friendly applications. As a strong collaborator with excellent
              communication skills, I'm committed to continuous improvement and professional
              growth.
            </p>
          </div>

          <div className="relative">
            <div className="glass-card rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Based in Pakistan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  3+ years of experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  BS Computer Engineering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Full-stack developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;