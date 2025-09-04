import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About Me" Icon={User}>
      <Card>
        <CardContent className="p-6 text-muted-foreground">
          <p>
            I am a dedicated and proficient developer with a strong foundation in Java and Python, and expertise in full-stack Java development. My passion extends to the realms of Artificial Intelligence and Machine Learning, where I actively explore and implement innovative solutions. I have hands-on experience with cloud platforms like Azure and am adept at creating responsive, user-friendly web applications. My goal is to leverage my skills to build impactful and efficient software that solves real-world problems.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
