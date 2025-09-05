import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Pranav's Portfolio",
    description: "My personal portfolio website built with Next.js and Tailwind CSS to showcase my skills, projects, and experience.",
    image: "https://picsum.photos/602/400",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveHref: "#home",
    codeHref: "https://github.com/MrSingh2003",
    aiHint: "portfolio website"
  },
  {
    title: "Smart India Traveler",
    description: "An intelligent travel planning application that provides optimized itineraries and personalized recommendations using AI algorithms.",
    image: "https://picsum.photos/600/400",
    tags: ["AI/ML", "Java", "React", "Azure"],
    liveHref: "#",
    codeHref: "#",
    aiHint: "travel map"
  },
  {
    title: "E-Commerce Web Application",
    description: "A full-featured e-commerce platform with capabilities for product management, user authentication, and a secure payment gateway.",
    image: "https://picsum.photos/601/400",
    tags: ["Full-Stack", "Spring Boot", "Next.js", "SQL"],
    liveHref: "#",
    codeHref: "#",
    aiHint: "online store"
  },
];

export function Projects() {
  return (
    <Section id="projects" title="My Projects" Icon={Code}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1 embla__container">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-1 embla__slide">
               <div className="p-1">
                <Card className="flex flex-col overflow-hidden h-full project-card">
                   <CardHeader className="p-0 relative h-60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{objectFit: 'cover'}}
                      className="w-full"
                      data-ai-hint={project.aiHint}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </CardHeader>
                  <div className="flex flex-1 flex-col p-6 bg-card">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <CardContent className="flex-1 p-0 text-muted-foreground">
                      <p>{project.description}</p>
                    </CardContent>
                    <CardFooter className="p-0 pt-6 justify-end space-x-2">
                      <Button asChild variant="ghost" size="sm">
                        <a href={project.codeHref} target="_blank" rel="noopener noreferrer">
                          <Code className="mr-2 h-4 w-4" /> Code
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a href={project.liveHref} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-50px] hidden sm:inline-flex" />
        <CarouselNext className="right-[-50px] hidden sm:inline-flex" />
      </Carousel>
    </Section>
  );
}
