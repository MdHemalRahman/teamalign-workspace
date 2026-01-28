import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, DollarSign, Video, CheckCircle, ArrowDown, Send, Clock } from "lucide-react";

const WorkflowSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const workflows = [
    {
      icon: FileText,
      title: "Leave Applications",
      description: "Submit leave requests with automatic routing to managers",
      steps: ["Submit Request", "Manager Review", "HR Approval", "Calendar Update"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: DollarSign,
      title: "Advance Salary",
      description: "Request salary advances with approval workflow",
      steps: ["Request Amount", "Manager Approval", "Finance Review", "Disbursement"],
      color: "bg-success/10 text-success",
    },
    {
      icon: Video,
      title: "Meeting Workflows",
      description: "Schedule and track team meetings efficiently",
      steps: ["Schedule Meeting", "Send Invites", "Conduct Meeting", "Share Notes"],
      color: "bg-warning/10 text-warning",
    },
  ];

  return (
    <section className="section-spacing" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Streamlined Workflows
          </h2>
          <p className="text-lg text-muted-foreground">
            Reduce operational friction. Automate approvals. Keep everyone in the loop.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="card-elevated p-6"
            >
              <div className={`w-14 h-14 rounded-2xl ${workflow.color} flex items-center justify-center mb-5`}>
                <workflow.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">{workflow.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{workflow.description}</p>

              {/* Workflow Steps */}
              <div className="space-y-0">
                {workflow.steps.map((step, stepIndex) => (
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.15 + stepIndex * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="relative"
                  >
                    <div className="flex items-center gap-3 py-3">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground">
                          {stepIndex + 1}
                        </div>
                        {stepIndex < workflow.steps.length - 1 && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: 16 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: 0.5 + index * 0.15 + stepIndex * 0.1,
                            }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-px bg-border"
                          />
                        )}
                      </div>
                      <span className="text-sm text-foreground">{step}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16"
        >
          <div className="card-elevated p-6 lg:p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-medium text-foreground">Live Request Flow</h3>
              <span className="text-sm text-muted-foreground">Leave Application</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                { icon: Send, label: "Request Sent", status: "done", time: "2 min ago" },
                { icon: Clock, label: "Manager Review", status: "active", time: "In progress" },
                { icon: FileText, label: "HR Approval", status: "pending", time: "Waiting" },
                { icon: CheckCircle, label: "Approved", status: "pending", time: "—" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex flex-col items-center text-center relative flex-1"
                >
                  {index > 0 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                      }}
                      className={`absolute top-6 right-full h-0.5 hidden md:block ${
                        item.status === "done" || index === 1 ? "bg-primary" : "bg-border"
                      }`}
                      style={{ width: "calc(100% - 2rem)" }}
                    />
                  )}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                      item.status === "done"
                        ? "bg-success text-success-foreground"
                        : item.status === "active"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
