import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Smart India Traveler",
    description: "An intelligent travel planning application that provides optimized itineraries and personalized recommendations using AI algorithms.",
    image: "https://picsum.photos/600/400",
    tags: ["AI/ML", "Java", "React", "Azure"],
    liveHref: "#",
    codeHref: "#"
  },
  {
    title: "E-Commerce Web Application",
    description: "A full-featured e-commerce platform with capabilities for product management, user authentication, and a secure payment gateway.",
    image: "https://picsum.photos/601/400",
    tags: ["Full-Stack", "Spring Boot", "Next.js", "SQL"],
    liveHref: "#",
    codeHref: "#"
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Projects" Icon={Code}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full object-cover"
                data-ai-hint="application screenshot"
              />
            </CardHeader>
            <div className="flex flex-1 flex-col p-6">
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
        ))}
      </div>
    </Section>
  );
}
