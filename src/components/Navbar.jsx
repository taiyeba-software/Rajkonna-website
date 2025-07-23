

import { cn } from "@/lib/utils";
import { Menu, X, ShoppingBag, LogIn } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { AudioToggle } from "@/components/AudioToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <motion.nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-4" style={{ fontFamily: "MPLUS-Rounded" }} >
        
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="text-xl font-bold text-primary flex items-center"
          >
            <img src="/logo.svg" alt="Brand Logo" className="h-6" />
          </a>
        </div>

        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            <motion.a
              key={key}
              href={item.href}
              className="relative text-sm font-light text-foreground/80 hover:text-primary transition-colors duration-300 group"
              whileHover={{}}
            >
              {item.name}
              <motion.span
                className="absolute left-0 -bottom-0.5 h-[1px] bg-primary block"
                initial={{ width: 0 }}
                animate={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </div>

        
        <div className="hidden md:flex items-center gap-3">
          <button className="px-3 py-1 text-sm font-light text-foreground hover:text-primary border border-border hover:border-primary rounded-full transition flex items-center gap-1">
            <LogIn size={18} /> Log In
          </button>
          <button className="px-3 py-1 text-sm font-light text-foreground hover:text-primary border border-border hover:border-primary rounded-full transition flex items-center gap-1">
            <ShoppingBag size={18} /> Cart
          </button>
          <AudioToggle />
        </div>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl" >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors duration-300"
              
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

           
            <button
              className="text-foreground/80 hover:text-primary flex items-center gap-2 hover:underline underline-offset-4"
              style={{ fontFamily: "MPLUS-Rounded" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={20} /> Log In
            </button>
            <button
              className="text-foreground/80 hover:text-primary flex items-center gap-2 hover:underline underline-offset-4"
              style={{ fontFamily: "MPLUS-Rounded" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag size={20} /> Cart
            </button>

            
            <AudioToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
