import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <section id="home" className="flex flex-col-reverse items-center gap-8 text-center md:flex-row md:text-left md:gap-12">
      <div className="flex-1">
        <Badge variant="outline" className="mb-4 border-primary text-primary">Full-Stack Developer & AI Enthusiast</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Pranav
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          A passionate developer specializing in Java, Python, and AI/ML, creating modern and responsive web applications.
        </p>
        <div className="mt-8 flex justify-center gap-4 md:justify-start">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#" download>
              <FileText className="mr-2 h-4 w-4"/>
              Download CV
            </a>
          </Button>
        </div>
        <div className="mt-8 flex justify-center space-x-2 md:justify-start">
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:pranav@example.com" aria-label="Email">
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
      <div className="relative shrink-0">
        <Image
          src="https://picsum.photos/280/280"
          alt="Pranav"
          width={280}
          height={280}
          className="rounded-full border-4 border-primary/50 shadow-lg"
          data-ai-hint="profile picture"
          priority
        />
        <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-background flex items-center justify-center text-xl shadow-md">
            👋
        </div>
      </div>
    </section>
  );
}
