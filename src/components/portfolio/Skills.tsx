"use client";

import { Wrench } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Section } from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background/80 p-2 shadow-lg backdrop-blur-sm">
        <p className="font-bold text-foreground">{`${label} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function Skills() {
  return (
    <Section id="skills" title="My Skills" Icon={Wrench}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category} className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skills} layout="vertical" margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="name" type="category" width={80} tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsl(var(--primary) / 0.1)'}} />
                    <Bar dataKey="level" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} background={{ fill: 'hsl(var(--secondary))', radius: 4 }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}