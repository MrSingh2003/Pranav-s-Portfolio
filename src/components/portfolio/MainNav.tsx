"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => {
        const el = document.querySelector(item.href);
        return el;
      });

      let currentSection = "";
      
      for(const section of sections) {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 150) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}>
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Code className="h-6 w-6 text-primary"/>
          Pranav
        </Link>
        {isClient && <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href.substring(1)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>}
        <div className="hidden md:block">
            <Button asChild>
                <a href="mailto:pranav@example.com">Hire Me</a>
            </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {item.name}
              </Link>
            ))}
             <Button asChild className="mt-4">
                <a href="mailto:pranav@example.com">Hire Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}