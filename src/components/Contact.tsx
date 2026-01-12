import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary font-medium mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I'm currently open to new opportunities and always interested in connecting
          with fellow developers and tech enthusiasts. Whether you have a question,
          a project idea, or just want to say hi, my inbox is always open!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:shaharyarkhawar2611@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity glow"
          >
            <Mail size={18} />
            Say Hello
          </a>
          <a
            href="tel:+923361774089"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            <Phone size={18} />
            Call Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/shaharyarkhawar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaharyar-khawar-4bb434213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;