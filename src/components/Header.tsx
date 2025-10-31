import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/content";
import { motion } from "framer-motion";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "transition-colors hover:text-baara-gold",
      isActive ? "text-baara-gold font-semibold" : "text-foreground"
    );
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-baara-gold" />
            <span className="text-2xl font-serif font-bold text-foreground">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={navLinkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex bg-baara-dark text-baara-light hover:bg-gray-800 dark:bg-baara-light dark:text-baara-dark dark:hover:bg-gray-200 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-3/4 bg-background">
                  <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                       <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <Briefcase className="h-8 w-8 text-baara-gold" />
                        <span className="text-2xl font-serif font-bold text-foreground">
                          {siteConfig.name}
                        </span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="flex flex-col space-y-6 text-xl">
                      {siteConfig.navLinks.map((link) => (
                        <NavLink
                          key={link.href}
                          to={link.href}
                          className={navLinkClasses}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </nav>
                    <Button asChild className="mt-auto w-full" size="lg" onClick={() => setIsOpen(false)}>
                       <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}