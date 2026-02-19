import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const serviceItems = [
  { label: "Social Media Marketing", path: "/services/social-media" },
  { label: "SEO", path: "/services/seo" },
  { label: "Paid Ads", path: "/services/paid-ads" },
  { label: "Web Development", path: "/services/web-development" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Work", path: "/work" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center">
            <img 
              src="/MB logo.png" 
              alt="MB Global Marketing" 
              className="h-32 md:h-40 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Nav — Centered */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.path} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 hover:bg-primary/5 ${
                      isServiceActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border/60 shadow-2xl shadow-primary/10 overflow-hidden"
                      >
                        <div className="p-2">
                          <Link
                            to="/services"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-accent hover:bg-primary/5 transition-colors"
                          >
                            All Services
                            <ArrowRight size={14} className="opacity-50" />
                          </Link>
                          <div className="h-px bg-border/30 my-1" />
                          {serviceItems.map((s) => (
                            <Link
                              key={s.path}
                              to={s.path}
                              onClick={() => setServicesOpen(false)}
                              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                location.pathname === s.path
                                  ? "text-accent bg-primary/10"
                                  : "text-muted-foreground hover:text-accent hover:bg-primary/5"
                              }`}
                            >
                              {s.label}
                              <ArrowRight size={14} className="opacity-0 group-hover:opacity-50" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 ${
                    location.pathname === item.path ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block relative z-10">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-bold hover:opacity-90 transition-opacity glow-yellow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground relative z-10">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border/30"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.path}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                        isServiceActive ? "text-accent bg-primary/5" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-1 space-y-1"
                        >
                          <Link to="/services" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-accent">
                            All Services
                          </Link>
                          {serviceItems.map((s) => (
                            <Link
                              key={s.path}
                              to={s.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-4 py-2.5 rounded-lg text-sm ${location.pathname === s.path ? "text-accent bg-primary/5" : "text-muted-foreground hover:text-accent"}`}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      location.pathname === item.path ? "text-accent bg-primary/5" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-5 py-3 rounded-full bg-accent text-accent-foreground text-center font-bold mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
