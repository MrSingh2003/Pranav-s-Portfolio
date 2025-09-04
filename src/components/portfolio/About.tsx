import { User, Code, BrainCircuit, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "./Section";

const aboutPoints = [
  {
    Icon: Code,
    title: "Full-Stack Expertise",
    description: "Proficient in Java and Python with a strong foundation in full-stack Java development, creating responsive, user-friendly web applications."
  },
  {
    Icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Actively exploring and implementing innovative solutions in Artificial Intelligence and Machine Learning to solve real-world problems."
  },
  {
    Icon: Cloud,
    title: "Cloud Technologies",
    description: "Hands-on experience with cloud platforms like Azure, deploying and managing scalable and efficient applications."
  }
];

export function About() {
  return (
    <Section id="about" title="About Me" Icon={User}>
      <div className="grid md:grid-cols-3 gap-8">
        {aboutPoints.map(point => (
          <Card key={point.title} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <point.Icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-xl">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
