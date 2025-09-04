import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";

const achievements = [
  "Deloitte Australia - Technology Virtual Job Simulation",
  "Microsoft Certified: Azure AI Vision Specialist",
  "Solved 500+ problems on LeetCode & GeeksforGeeks",
  "Smart India Hackathon 2023 Finalist"
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
