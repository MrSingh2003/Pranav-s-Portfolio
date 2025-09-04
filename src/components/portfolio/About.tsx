import { User, Code, BrainCircuit, Cloud, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "./Section";
import { AnimatedSection } from "./AnimatedSection";

const aboutPoints = [
  {
    Icon: Code,
    title: "Web Development with AI",
    description: "Proficient in creating responsive, user-friendly web applications with integrated AI features."
  },
  {
    Icon: Server,
    title: "Java Full Stack Developer",
    description: "Strong foundation in full-stack Java development, building robust and scalable enterprise-level applications."
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutPoints.map((point, index) => (
           <AnimatedSection delay={index * 150} key={point.title}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-2xl hover:[transform:rotateX(10deg)_rotateY(-10deg)_scale(1.05)]">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <point.Icon className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
