import { motion } from "framer-motion";
import { Clock, Users, Calendar, CheckSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground"
            >
              Track Work.
              <br />
              See Progress.
              <br />
              <span className="text-primary">Stay Aligned.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              An employee tracking system that connects attendance, tasks, and team planning in one workspace.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Clock, label: "Time Tracking" },
                { icon: Users, label: "Team Visibility" },
                { icon: Calendar, label: "Planning" },
                { icon: CheckSquare, label: "Task Management" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="card-elevated p-6 lg:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Team Dashboard</p>
                    <p className="text-xs text-muted-foreground">Today's Overview</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <motion.div 
                  className="bg-accent/50 rounded-xl p-4"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-2xl font-semibold text-foreground">24</p>
                  <p className="text-xs text-muted-foreground">Present</p>
                </motion.div>
                <motion.div 
                  className="bg-accent/50 rounded-xl p-4"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <p className="text-2xl font-semibold text-foreground">18</p>
                  <p className="text-xs text-muted-foreground">Tasks Done</p>
                </motion.div>
                <motion.div 
                  className="bg-accent/50 rounded-xl p-4"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-2xl font-semibold text-primary">3</p>
                  <p className="text-xs text-muted-foreground">On Leave</p>
                </motion.div>
              </div>

              {/* Activity List */}
              <div className="space-y-3">
                {[
                  { name: "Sarah Chen", status: "Working on Q4 Report", time: "09:15 AM", active: true },
                  { name: "James Miller", status: "In meeting", time: "09:00 AM", active: true },
                  { name: "Priya Sharma", status: "Lunch break", time: "12:30 PM", active: false },
                ].map((person, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${index === 0 ? 'bg-primary/20' : index === 1 ? 'bg-success/20' : 'bg-warning/20'} flex items-center justify-center`}>
                        <span className="text-xs font-medium text-foreground">{person.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{person.name}</p>
                        <p className="text-xs text-muted-foreground">{person.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{person.time}</span>
                      <div className={`w-2 h-2 rounded-full ${person.active ? 'bg-success' : 'bg-warning'}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 card-dashboard p-3 hidden lg:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">8h 32m worked</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 card-dashboard p-3 hidden lg:block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-success" />
                <span className="text-xs font-medium text-foreground">12 tasks completed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
