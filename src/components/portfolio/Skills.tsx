import { Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const skills = {
  "Languages": ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  "Frameworks & Libraries": ["Spring Boot", "React", "Next.js", "Node.js", "TensorFlow", "PyTorch", "Scikit-learn", "Tailwind CSS"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Microsoft Azure", "Vercel"],
  "Design": ["Figma", "Adobe XD"]
};

export function Skills() {
  return (
    <Section id="skills" title="My Skills" Icon={Wrench}>
      <TooltipProvider delayDuration={100}>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {list.map((skill) => (
                   <Tooltip key={skill}>
                    <TooltipTrigger asChild>
                       <Badge
                        variant="default"
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-base font-medium cursor-pointer px-4 py-2 transition-transform hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Proficient in {skill}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TooltipProvider>
    </Section>
  );
}
