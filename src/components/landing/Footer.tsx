import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const links = {
    product: ["Features", "Pricing", "Integrations", "Changelog"],
    company: ["About", "Blog", "Careers", "Contact"],
    resources: ["Documentation", "Help Center", "API", "Status"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="border-t border-border py-16" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-lg font-semibold text-foreground">EMP</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Employee Management & Tracking Platform. Connect attendance, tasks, and team planning in one workspace.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2026 EMP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {links.legal.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
