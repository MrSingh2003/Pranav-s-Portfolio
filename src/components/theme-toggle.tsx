"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full p-1 bg-secondary transition-colors duration-500 ease-in-out"
    >
      <div className="relative w-full h-full flex items-center justify-between text-yellow-400 dark:text-primary">
          <Sun className="w-5 h-5" />
          <Moon className="w-5 h-5" />
      </div>
      <div 
        className="absolute w-6 h-6 bg-white dark:bg-slate-800 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
        style={{ left: theme === 'light' ? '4px' : 'calc(100% - 28px)'}}
      />
    </Button>
  )
}
