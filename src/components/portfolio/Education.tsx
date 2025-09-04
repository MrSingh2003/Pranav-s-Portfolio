import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const education = [
  {
    institution: "GL Bajaj Group of Institutions, Mathura",
    degree: "B.Tech in Computer Science and Engineering (AI and ML)",
    period: "2022 - 2026",
  },
  {
    institution: "St. Jude's College, Unnao",
    degree: "Class XII (ISC Board)",
    period: "2019 - 2021",
  },
  {
    institution: "St. Jude's College, Unnao",
    degree: "Class X (ICSE Board)",
    period: "Passing Year - 2019",
  },
];

export function Education() {
  return (
    <Section id="education" title="Education" Icon={GraduationCap}>
       <div className="relative border-l-2 border-primary/20 pl-8 space-y-10">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-primary ring-8 ring-background" />
            <p className="text-sm font-medium text-primary">{edu.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">{edu.institution}</h3>
            <p className="text-md text-muted-foreground">{edu.degree}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
