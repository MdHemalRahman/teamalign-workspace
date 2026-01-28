import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Users, Clock } from "lucide-react";

const CalendarSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentMonth = "January 2026";

  // Calendar data with events
  const calendarData = [
    { day: null }, { day: null }, { day: null }, { day: 1 }, { day: 2 }, { day: 3, events: ["Team Meeting"] }, { day: 4 },
    { day: 5 }, { day: 6, events: ["Sprint Start"] }, { day: 7 }, { day: 8 }, { day: 9, absence: "Sarah C." }, { day: 10 }, { day: 11 },
    { day: 12 }, { day: 13 }, { day: 14, events: ["Review"] }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 },
    { day: 19 }, { day: 20, events: ["Training"] }, { day: 21, absence: "James M." }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 },
    { day: 26, holiday: "Republic Day" }, { day: 27 }, { day: 28 }, { day: 29, events: ["All Hands"] }, { day: 30 }, { day: 31 }, { day: null },
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
            Organization Calendar
          </h2>
          <p className="text-lg text-muted-foreground">
            Holidays, absences, meetings, and tasks—all in one unified view.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="card-elevated p-6 lg:p-8"
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground">{currentMonth}</h3>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors">
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-accent transition-colors">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Meetings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span className="text-sm text-muted-foreground">Absences</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Holidays</span>
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {days.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + index * 0.01,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative aspect-square p-2 rounded-xl flex flex-col items-center justify-start ${
                  item.day
                    ? "bg-card border border-border/50 cursor-pointer hover:border-border transition-colors"
                    : ""
                } ${item.holiday ? "bg-success/5 border-success/20" : ""}`}
                onMouseEnter={() => item.day && setHoveredDay(item.day)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                {item.day && (
                  <>
                    <span className={`text-sm font-medium ${item.holiday ? "text-success" : "text-foreground"}`}>
                      {item.day}
                    </span>
                    
                    {/* Event Indicators */}
                    <div className="flex gap-1 mt-1 flex-wrap justify-center">
                      {item.events && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                        />
                      )}
                      {item.absence && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                          className="w-1.5 h-1.5 rounded-full bg-warning"
                        />
                      )}
                      {item.holiday && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                          className="w-1.5 h-1.5 rounded-full bg-success"
                        />
                      )}
                    </div>

                    {/* Hover Tooltip */}
                    {hoveredDay === item.day && (item.events || item.absence || item.holiday) && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 bg-card rounded-lg shadow-lg border border-border p-3 min-w-[140px]"
                      >
                        {item.events && (
                          <div className="flex items-center gap-2 text-xs text-foreground">
                            <Clock className="w-3 h-3 text-primary" />
                            {item.events[0]}
                          </div>
                        )}
                        {item.absence && (
                          <div className="flex items-center gap-2 text-xs text-foreground">
                            <Users className="w-3 h-3 text-warning" />
                            {item.absence} absent
                          </div>
                        )}
                        {item.holiday && (
                          <div className="flex items-center gap-2 text-xs text-success">
                            <CalendarIcon className="w-3 h-3" />
                            {item.holiday}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: "Holidays This Month", value: "1" },
            { label: "Team Absences", value: "2" },
            { label: "Scheduled Meetings", value: "4" },
            { label: "Working Days Left", value: "22" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="metric-card text-center"
            >
              <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarSection;
