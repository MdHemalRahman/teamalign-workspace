import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Clock, User, ChevronRight, CheckCircle2 } from "lucide-react";

const TaskManagement = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const tasks = [
    {
      title: "Q4 Financial Report",
      owner: "Sarah Chen",
      progress: 85,
      timeRemaining: "2h 30m",
      priority: "high",
      status: "in-progress",
    },
    {
      title: "Client Presentation Deck",
      owner: "James Miller",
      progress: 100,
      timeRemaining: "Completed",
      priority: "medium",
      status: "completed",
    },
    {
      title: "User Research Analysis",
      owner: "Priya Sharma",
      progress: 45,
      timeRemaining: "4h 15m",
      priority: "medium",
      status: "in-progress",
    },
    {
      title: "Sprint Planning Document",
      owner: "Alex Thompson",
      progress: 20,
      timeRemaining: "6h 00m",
      priority: "low",
      status: "in-progress",
    },
  ];

  const workSummaries = [
    {
      employee: "Sarah Chen",
      date: "Today",
      summary: "Completed financial analysis for Q4. Reviewed budget allocations and prepared variance report.",
      hours: "7h 45m",
    },
    {
      employee: "James Miller",
      date: "Today",
      summary: "Finalized client presentation. Conducted 2 stakeholder meetings. Updated project timeline.",
      hours: "8h 15m",
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
            Tasks & Work Summaries
          </h2>
          <p className="text-lg text-muted-foreground">
            Daily accountability made simple. Track progress, manage deadlines, and maintain clear ownership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Task List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="card-elevated p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-foreground">Active Tasks</h3>
              <span className="text-sm text-muted-foreground">4 tasks</span>
            </div>

            <div className="space-y-4">
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="task-row group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {task.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            task.priority === "high"
                              ? "bg-destructive"
                              : task.priority === "medium"
                              ? "bg-warning"
                              : "bg-muted-foreground"
                          }`}
                        />
                      )}
                      <span className="font-medium text-foreground">{task.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{task.owner}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{task.timeRemaining}</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {task.progress}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${task.progress}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className={`h-full rounded-full ${
                        task.status === "completed" ? "bg-success" : "bg-primary"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Summaries */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="card-elevated p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-foreground">Work Summaries</h3>
              <span className="text-sm text-muted-foreground">Today</span>
            </div>

            <div className="space-y-6">
              {workSummaries.map((summary, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="pb-6 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">
                          {summary.employee.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{summary.employee}</p>
                        <p className="text-xs text-muted-foreground">{summary.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{summary.hours}</span>
                    </div>
                  </div>
                  <div className="pl-12">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {summary.summary}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 p-4 bg-accent/50 rounded-xl flex items-center gap-3"
            >
              <FileText className="w-5 h-5 text-accent-foreground" />
              <p className="text-sm text-accent-foreground">
                Team members submit daily summaries by 6:30 PM
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaskManagement;
