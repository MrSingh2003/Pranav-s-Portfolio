"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const lightThemeImage = "https://picsum.photos/1920/1082";
  const darkThemeImage = "https://picsum.photos/1920/1081";
  const lightThemeHint = "tree mountain";
  const darkThemeHint = "stars mountain";

  const getBackgroundImage = () => {
    if (!isClient) return darkThemeImage; // Default for server-side rendering
    return theme === "light" ? lightThemeImage : darkThemeImage;
  };
  
  const getAiHint = () => {
    if (!isClient) return darkThemeHint;
    return theme === 'light' ? lightThemeHint : darkThemeHint;
  }

  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={getBackgroundImage()}
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-20"
          data-ai-hint={getAiHint()}
          priority
          key={theme}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="relative">
          <Image
            src="/pranav.jpg?v=2"
            alt="Pranav Singh"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/50 shadow-lg"
            data-ai-hint="profile picture"
            priority
          />
           <div className="absolute -bottom-2 -right-2 text-4xl animate-wave">
            👋
          </div>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl font-headline">
          Hi, I'm Pranav Singh
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
         I'm a passionate Full-Stack Developer & AI Enthusiast specializing in Java and Python, building modern and responsive web applications.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm">
          <Button asChild size="lg" className="w-full">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <a href="https://drive.google.com/file/d/13jn3yVk_qrQsiwXOB_Eytd2PkptYXn2k/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5"/>
              My Resume
            </a>
          </Button>
        </div>
      </div>
       <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
            <div className="h-12 w-7 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
                <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
            </div>
        </a>
      </div>
    </section>
  );
}
