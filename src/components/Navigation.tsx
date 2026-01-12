import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-heading font-bold text-primary">
            SK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary mr-1">0{idx + 1}.</span>
                {item.label}
              </a>
            ))}
            <a
              href="/ShaharyarKhawarResume2.pdf"
              target="_blank"
              className="px-4 py-2 text-sm border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
        >
          <div className="flex flex-col items-center py-8 gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary mr-1">0{idx + 1}.</span>
                {item.label}
              </a>
            ))}
            <a
              href="/ShaharyarKhawarResume2.pdf"
              target="_blank"
              className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;