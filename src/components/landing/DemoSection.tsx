import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing bg-secondary/30" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ready to see it in action?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            See how your organization
            <br />
            <span className="text-primary">works together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Explore the dashboard, see cross-team visibility in action, and understand how EMP brings clarity to your workforce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="btn-primary-soft group px-8 py-6 text-base"
            >
              Explore the Dashboard
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="card-elevated p-8 opacity-50">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.5 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
                  className="h-8 bg-secondary rounded-lg"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
