import { Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

const skills = {
  "Languages": ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  "Frameworks & Libraries": ["Spring Boot", "React", "Next.js", "Node.js", "TensorFlow", "PyTorch", "Scikit-learn", "Tailwind CSS"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Microsoft Azure", "Vercel"],
  "Design": ["Figma", "Adobe XD"]
};

export function Skills() {
  return (
    <Section id="skills" title="Skills" Icon={Wrench}>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <Badge key={skill} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20 text-sm font-normal cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
