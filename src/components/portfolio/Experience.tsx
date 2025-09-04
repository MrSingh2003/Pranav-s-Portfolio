import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const experiences = [
  {
    role: "Technical Team Lead",
    company: "HackwithIndia x GL Bajaj",
    period: "Jan 2025 - Present",
    description: "Leading a team of developers in various technical projects, mentoring junior members, and overseeing project architecture and delivery."
  },
  {
    role: "Software Developer Intern",
    company: "Kinetic Sage Technologies",
    period: "Jan 2025 - Apr 2025",
    description: "Contributed to the development of web applications, focusing on front-end and back-end features, bug fixing, and performance optimization."
  }
];

export function Experience() {
  return (
    <Section id="experience" title="Experience" Icon={Briefcase}>
      <div className="relative border-l-2 border-primary/20 pl-8 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-primary ring-8 ring-background" />
            <p className="text-sm font-medium text-primary">{exp.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">{exp.role}</h3>
            <p className="text-md text-muted-foreground">{exp.company}</p>
            <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
