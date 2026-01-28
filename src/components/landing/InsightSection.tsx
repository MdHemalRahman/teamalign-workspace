import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, TrendingUp, Users, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const InsightSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const overviewCards = [
    {
      icon: Users,
      label: "Team Attendance",
      value: "94%",
      trend: "+2.1%",
      trendUp: true,
      color: "text-success",
    },
    {
      icon: CheckCircle2,
      label: "Tasks Completed",
      value: "87%",
      trend: "+5.4%",
      trendUp: true,
      color: "text-primary",
    },
    {
      icon: Clock,
      label: "Avg. Work Hours",
      value: "8.2h",
      trend: "+0.3h",
      trendUp: true,
      color: "text-warning",
    },
    {
      icon: AlertCircle,
      label: "Pending Approvals",
      value: "3",
      trend: "-2",
      trendUp: false,
      color: "text-muted-foreground",
    },
  ];

  const chartData = [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 92 },
    { day: "Wed", value: 88 },
    { day: "Thu", value: 96 },
    { day: "Fri", value: 78 },
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
            Insight & Oversight
          </h2>
          <p className="text-lg text-muted-foreground">
            Managers see attendance, tasks, and availability in one unified dashboard.
          </p>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {overviewCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="metric-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-secondary flex items-center justify-center ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${card.trendUp ? "text-success" : "text-muted-foreground"}`}>
                  <TrendingUp className={`w-3 h-3 ${!card.trendUp && "rotate-180"}`} />
                  {card.trend}
                </div>
              </div>
              <p className="text-3xl font-semibold text-foreground mb-1">{card.value}</p>
              <p className="text-sm text-muted-foreground">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 card-elevated p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="font-medium text-foreground">Weekly Productivity</h3>
              </div>
              <span className="text-sm text-muted-foreground">This Week</span>
            </div>

            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between gap-4 h-48">
              {chartData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${item.value}%` } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="w-full bg-primary/20 rounded-t-lg relative overflow-hidden"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: "100%" } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.6 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="absolute bottom-0 w-full bg-primary rounded-t-lg"
                    />
                  </motion.div>
                  <span className="text-xs text-muted-foreground">{item.day}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Status */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="card-elevated p-6"
          >
            <h3 className="font-medium text-foreground mb-6">Team Status</h3>
            <div className="space-y-4">
              {[
                { name: "Sarah Chen", status: "Working", statusType: "active" },
                { name: "James Miller", status: "In Meeting", statusType: "meeting" },
                { name: "Priya Sharma", status: "On Leave", statusType: "away" },
                { name: "Alex Thompson", status: "Working", statusType: "active" },
                { name: "Maria Garcia", status: "Break", statusType: "break" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-xs font-medium text-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-foreground">{member.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        member.statusType === "active"
                          ? "bg-success"
                          : member.statusType === "meeting"
                          ? "bg-primary"
                          : member.statusType === "away"
                          ? "bg-muted-foreground"
                          : "bg-warning"
                      }`}
                    />
                    <span className="text-xs text-muted-foreground">{member.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
