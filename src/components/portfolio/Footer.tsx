"use client";

import { Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Pranav Singh. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-2 sm:mt-0">
          <Button asChild variant="ghost" size="icon">
            <a href="mailto:pranavsingh812003@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://linkedin.com/in/pranav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/pranav" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
            <Button asChild variant="ghost" size="icon">
            <a href="https://leetcode.com/pranav" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Code className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
