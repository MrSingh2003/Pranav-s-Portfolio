"use client";

import { Wrench } from "lucide-react";
import { Section } from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skillsData = {
  "Languages": [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 75 },
  ],
  "Frameworks & Libraries": [
    { name: "Spring Boot", level: 85 },
    { name: "React/Next.js", level: 80 },
    { name: "PyTorch", level: 70 },
  ],
  "AI & Data Science": [
    { name: "TensorFlow", level: 75 },
    { name: "NumPy", level: 80 },
    { name: "Pandas", level: 85 },
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub", level: 90 },
    { name: "Microsoft Azure", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Firebase", level: 75 },
  ],
  "Design & Others": [
    { name: "Figma", level: 80 },
    { name: "Agile Methodologies", level: 85 },
    { name: "Project Management", level: 75 },
  ],
};


function SkillCategory({ category, skills }: { category: string, skills: {name: string, level: number}[] }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(100), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {skills.map(skill => (
                        <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-muted-foreground">{skill.name}</span>
                                <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                            </div>
                            <Progress value={progress > 0 ? skill.level : 0} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export function Skills() {
  return (
    <Section id="skills" title="My Skills" Icon={Wrench}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category} category={category} skills={skills} />
        ))}
      </div>
    </Section>
  );
}
