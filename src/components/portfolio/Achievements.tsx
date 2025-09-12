import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

const achievements = [
  "Deloitte Australia Technology Virtual Completion Certificate",
  "Microsoft Certified Azure AI Vision Specialist",
  "Solved 300+ problems on LeetCode",
  "HackerRank Certified in Problem Solving ",
  "Winner Toonav Ideathon(College Event)",
  "Smart India Hackathon 2023 Finalist",
  "AWS Solutions Architecture Completion Certificate",
];

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements" Icon={Award}>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}
