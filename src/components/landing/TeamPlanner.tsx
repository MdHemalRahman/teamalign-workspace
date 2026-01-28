import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Eye, Calendar, ArrowLeftRight } from "lucide-react";

const TeamPlanner = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-40, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  const teamAData = [
    { day: "Mon", task: "Sprint Planning", status: "completed" },
    { day: "Tue", task: "Development", status: "in-progress" },
    { day: "Wed", task: "Code Review", status: "scheduled" },
    { day: "Thu", task: "Testing", status: "scheduled" },
    { day: "Fri", task: "Deployment", status: "scheduled" },
  ];

  const teamBData = [
    { day: "Mon", task: "Research", status: "completed" },
    { day: "Tue", task: "Design Review", status: "completed" },
    { day: "Wed", task: "Prototype", status: "in-progress" },
    { day: "Thu", task: "User Testing", status: "scheduled" },
    { day: "Fri", task: "Iteration", status: "scheduled" },
  ];

  return (
    <section className="section-spacing bg-secondary/30 overflow-hidden" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Eye className="w-4 h-4" />
            <span>Cross-Team Visibility</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            See Across Teams
          </h2>
          <p className="text-lg text-muted-foreground">
            Your strongest differentiator. Teams can view each other's planners and task status across the organization.
          </p>
        </motion.div>

        {/* Split View Planners */}
        <div className="grid lg:grid-cols-2 gap-8 relative">
          {/* Connection Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex"
          >
            <div className="bg-card rounded-full p-4 shadow-lg border border-border">
              <ArrowLeftRight className="w-6 h-6 text-primary" />
            </div>
          </motion.div>

          {/* Team A Planner */}
          <motion.div
            style={{ x: leftX }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card-elevated p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Engineering Team</h3>
                <p className="text-sm text-muted-foreground">This week's plan</p>
              </div>
            </div>

            <div className="space-y-3">
              {teamAData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                >
                  <span className="text-sm font-medium text-muted-foreground w-10">
                    {item.day}
                  </span>
                  <span className="flex-1 text-sm text-foreground">{item.task}</span>
                  <div
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === "completed"
                        ? "bg-success/10 text-success"
                        : item.status === "in-progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status === "completed"
                      ? "Done"
                      : item.status === "in-progress"
                      ? "Active"
                      : "Planned"}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team B Planner */}
          <motion.div
            style={{ x: rightX }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="card-elevated p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Design Team</h3>
                <p className="text-sm text-muted-foreground">This week's plan</p>
              </div>
            </div>

            <div className="space-y-3">
              {teamBData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                >
                  <span className="text-sm font-medium text-muted-foreground w-10">
                    {item.day}
                  </span>
                  <span className="flex-1 text-sm text-foreground">{item.task}</span>
                  <div
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === "completed"
                        ? "bg-success/10 text-success"
                        : item.status === "in-progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status === "completed"
                      ? "Done"
                      : item.status === "in-progress"
                      ? "Active"
                      : "Planned"}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Eye,
              title: "Full Transparency",
              description: "Every team member sees the full picture of organizational work.",
            },
            {
              icon: Users,
              title: "Cross-Team Sync",
              description: "Coordinate handoffs and dependencies without endless meetings.",
            },
            {
              icon: Calendar,
              title: "Unified Planning",
              description: "Plan with awareness of what other teams are working on.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.9 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPlanner;
