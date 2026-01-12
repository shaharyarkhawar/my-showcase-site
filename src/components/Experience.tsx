import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Lead Software Engineer",
    company: "Roomy",
    period: "Jan 2024 - Present",
    projects: [
      {
        name: "Restaurant Management System",
        points: [
          "Optimized POS order taking screen resulting in 20% increase in order processing efficiency",
          "Engineered advanced features for order tracking and employee schedule management",
          "Implemented MySQL database architecture improving data retrieval times by 40%",
          "Designed real-time dashboard for order monitoring and sales insights",
          "Established seamless integration with FBR service for tax compliance",
          "Integrated Foodpanda with POS eliminating double order entry",
          "Implemented an online order system that streamlined order placement and real time processing, improving operational efficiency and order accuracy",
          "Integrated a secure payment gateway for online orders, enabling cashless transactions and im- proving checkout efficiency",
          "Implemented a restaurant accounting module producing real time financial reports such as Trial Balance and Profit and Loss, improving financial visibility and accuracy"
        ],
        tools: ["ReactJS", "PHP", "MySQL", "NodeJS", "AWS", "S3", "EC2", "RDS"],
      },
      {
        name: "Inventory Management System",
        points: [
          "Enhanced operational efficiency by 30% through real-time inventory tracking and automated reporting systems",
          "Mentored junior developers and conducted code reviews, fostering a high-performing development team",
          "Designed waste tracking module reducing inventory waste by 25%",
          "Engineered dynamic ingredient tracking system reducing stock discrepancies by 85%",
        ],
        tools: ["ReactJS", "PHP", "MySQL"],
      }
    ],
  },
  {
    title: "Software Engineer II",
    company: "Roomy",
    period: "Jan 2023 - Dec 2023",
    projects: [ 
      {
        name: "Loyalty Program",
        points: [
          "Developed QR code generation and scanning system for seamless customer enrollment",
          "Implemented stamp-based reward system boosting customer retention",
          "Created intuitive UI for customers to track loyalty points and available rewards",
          "Integrated messaging system for automated notifications about rewards and special offers",
        ],
        tools: ["ReactJS", "PHP", "MySQL"],
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Roomy",
    period: "Dec 2021 - Dec 2022",
    projects: [
      {
        name: "Property Management System",
        points: [
          "Rolled out guest check-in/check-out functionality reducing check-in time by 50%",
          "Designed room availability tracking feature decreasing assignment errors by 30%",
          "Integrated payment processing reducing payment processing time by 40%",
          "Executed RESTful APIs for third-party booking sites increasing bookings by 20%",
          "Reduced manual workload for hotel staff by 25%",
        ],
        tools: ["ReactJS", "PHP", "MySQL"],
      },
    ],
  },
  {
    title: "Cloud DevOps Trainee",
    company: "SkipQ",
    period: "Aug 2021 - Nov 2021",
    projects: [
      {
        name: "Infrastructure & Monitoring",
        points: [
          "Monitored website latency leading to 10% decrease in page load times",
          "Executed efficient data processing mechanisms reducing processing time by 35%",
        ],
        tools: ["AWS", "Docker", "DynamoDB", "Lambda", "CloudWatch"],
      },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold font-heading mb-12">
          <span className="text-primary font-normal">03.</span>
          Work Experience
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tab buttons */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "px-4 py-3 text-sm font-medium text-left whitespace-nowrap transition-all",
                  "hover:bg-primary/10 hover:text-primary",
                  activeTab === idx
                    ? "text-primary bg-primary/10 md:border-l-2 md:-ml-px border-primary"
                    : "text-muted-foreground"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 min-h-[400px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-1">
                {experiences[activeTab].title}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {experiences[activeTab].period}
              </p>

              {experiences[activeTab].projects.map((project, pIdx) => (
                <div key={pIdx} className="mb-6">
                  <h4 className="text-base font-medium text-foreground mb-3">
                    {project.name}
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {project.points.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-xs text-primary bg-primary/10 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;