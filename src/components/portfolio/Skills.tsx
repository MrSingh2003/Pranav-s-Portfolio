import { Wrench } from "lucide-react";
import { Section } from "./Section";
import { Progress } from "@/components/ui/progress";

const skills = {
  "Languages": [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 75 },
  ],
  "Frameworks & Libraries": [
    { name: "Spring Boot", level: 85 },
    { name: "PyTorch", level: 70 },
  ],
  "AI": [
    { name: "TensorFlow", level: 75 },
    { name: "NumPy", level: 80 },
    { name: "Pandas", level: 85 },
  ],
  "Tools & Platforms": [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Microsoft Azure", level: 70 },
    { name: "AWS", level: 65 },
  ],
  "Design": [
    { name: "Figma", level: 80 },
    { name: "Adobe XD", level: 70 },
    { name: "Canva", level: 90 },
  ],
  "Others": [
    { name: "Agile Methodologies", level: 85 },
    { name: "Technical Documentation", level: 90 },
    { name: "Project Management", level: 75 },
  ]
};

export function Skills() {
  return (
    <Section id="skills" title="My Skills" Icon={Wrench}>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-foreground mb-4">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {list.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
