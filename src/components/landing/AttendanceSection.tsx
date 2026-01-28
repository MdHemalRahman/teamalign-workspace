import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Coffee, Sun, Car, MapPin, Timer } from "lucide-react";

const CountUpNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AttendanceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const metrics = [
    {
      icon: Clock,
      label: "Arrival Time",
      value: "09:00",
      subtext: "Average check-in",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Timer,
      label: "Out Time",
      value: "06:15",
      subtext: "Average check-out",
      color: "bg-success/10 text-success",
    },
    {
      icon: Coffee,
      label: "Lunch Break",
      value: "45",
      suffix: "min",
      subtext: "Daily average",
      color: "bg-warning/10 text-warning",
    },
    {
      icon: Sun,
      label: "Prayer Break",
      value: "15",
      suffix: "min",
      subtext: "As scheduled",
      color: "bg-accent text-accent-foreground",
    },
    {
      icon: Car,
      label: "Conveyance",
      value: "2,450",
      prefix: "$",
      subtext: "This month",
      color: "bg-secondary text-secondary-foreground",
    },
    {
      icon: MapPin,
      label: "Travel Costs",
      value: "890",
      prefix: "$",
      subtext: "Field visits",
      color: "bg-muted text-muted-foreground",
    },
  ];

  return (
    <section className="section-spacing bg-secondary/30" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Precise Time & Cost Tracking
          </h2>
          <p className="text-lg text-muted-foreground">
            Every minute accounted for. Every expense tracked. Complete visibility into your team's work patterns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="metric-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {metric.label}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-semibold text-foreground">
                  {metric.prefix}
                  {typeof metric.value === "number" ? (
                    <CountUpNumber value={metric.value} suffix={metric.suffix} />
                  ) : (
                    metric.value
                  )}
                  {metric.suffix && typeof metric.value !== "number" && metric.suffix}
                </p>
                <p className="text-sm text-muted-foreground">{metric.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16"
        >
          <div className="card-elevated p-6 lg:p-8">
            <h3 className="text-lg font-medium text-foreground mb-6">Today's Timeline</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6">
                {[
                  { time: "09:00", event: "Check-in", type: "arrival" },
                  { time: "12:30", event: "Lunch break started", type: "break" },
                  { time: "13:15", event: "Back to work", type: "return" },
                  { time: "15:30", event: "Prayer break", type: "break" },
                  { time: "15:45", event: "Resumed work", type: "return" },
                  { time: "18:15", event: "Check-out", type: "departure" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex items-center gap-4 pl-8 relative"
                  >
                    <div
                      className={`absolute left-2 w-4 h-4 rounded-full border-2 ${
                        item.type === "arrival"
                          ? "bg-success border-success"
                          : item.type === "departure"
                          ? "bg-primary border-primary"
                          : item.type === "break"
                          ? "bg-warning border-warning"
                          : "bg-card border-border"
                      }`}
                    />
                    <span className="text-sm font-mono text-muted-foreground w-16">{item.time}</span>
                    <span className="text-sm text-foreground">{item.event}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttendanceSection;
