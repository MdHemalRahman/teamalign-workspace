import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  // Track active section based on scroll position
  const handleScroll = useCallback(() => {
    const sections = ["features", "teams", "workflows", "calendar", "insights", "demo"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          return;
        }
      }
    }
    
    // If at the top, no active section
    if (window.scrollY < 100) {
      setActiveSection("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks: NavLink[] = [
    { 
      label: "Features", 
      href: "#features",
      children: [
        { label: "Attendance Tracking", href: "#features", description: "Track time and attendance" },
        { label: "Task Management", href: "#features", description: "Manage daily tasks" },
        { label: "Work Summaries", href: "#features", description: "Submit daily reports" },
      ]
    },
    { label: "Teams", href: "#teams" },
    { label: "Workflows", href: "#workflows" },
    { label: "Calendar", href: "#calendar" },
    { label: "Insights", href: "#insights" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    const section = href.replace("#", "");
    return activeSection === section;
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background layer */}
      <motion.div
        className="absolute inset-0 bg-background/95 backdrop-blur-md border-b border-border/40"
        style={{ opacity: backgroundOpacity }}
      />
      
      <nav className="relative section-container">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Product Name */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary">
              <span className="text-sm font-bold text-primary-foreground">E</span>
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">
              EMP
            </span>
          </a>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`relative px-3 py-2 text-sm transition-colors duration-200 group flex items-center gap-1 ${
                        isActive(link.href) 
                          ? "text-foreground" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      <span className={`absolute bottom-1 left-3 right-3 h-px bg-primary origin-left transition-transform duration-300 ease-out ${
                        isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-background/95 backdrop-blur-md">
                    {link.children.map((child) => (
                      <DropdownMenuItem 
                        key={child.label}
                        onClick={() => scrollToSection(child.href)}
                        className="flex flex-col items-start gap-0.5 cursor-pointer"
                      >
                        <span className="font-medium text-foreground">{child.label}</span>
                        {child.description && (
                          <span className="text-xs text-muted-foreground">{child.description}</span>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`relative px-3 py-2 text-sm transition-colors duration-200 group ${
                    isActive(link.href) 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`absolute bottom-1 left-3 right-3 h-px bg-primary origin-left transition-transform duration-300 ease-out ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </a>
              )
            ))}
          </div>

          {/* Right: Secondary Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#demo"
              onClick={(e) => { e.preventDefault(); scrollToSection("#demo"); }}
              className={`relative px-3 py-2 text-sm transition-colors duration-200 group ${
                isActive("#demo") 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Demo</span>
              <span className={`absolute bottom-1 left-3 right-3 h-px bg-primary origin-left transition-transform duration-300 ease-out ${
                isActive("#demo") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </a>
            <div className="w-px h-4 bg-border/60 mx-1" />
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-foreground bg-muted/50 hover:bg-muted rounded-lg transition-colors duration-200"
            >
              Log In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background/98 backdrop-blur-lg">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-2.5 pb-6 border-b border-border/50">
                  <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">E</span>
                  </div>
                  <span className="text-base font-semibold text-foreground tracking-tight">
                    EMP
                  </span>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 py-6 space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.children ? (
                        <div className="space-y-1">
                          <span className="block px-3 py-2 text-sm font-medium text-foreground">
                            {link.label}
                          </span>
                          <div className="pl-4 space-y-1">
                            {link.children.map((child) => (
                              <button
                                key={child.label}
                                onClick={() => scrollToSection(child.href)}
                                className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className={`block w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${
                            isActive(link.href)
                              ? "text-foreground bg-muted/50 font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {link.label}
                        </button>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Footer Actions */}
                <div className="pt-6 border-t border-border/50 space-y-3">
                  <button
                    onClick={() => scrollToSection("#demo")}
                    className="block w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    Demo
                  </button>
                  <a
                    href="#"
                    className="block w-full text-center px-4 py-2.5 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
