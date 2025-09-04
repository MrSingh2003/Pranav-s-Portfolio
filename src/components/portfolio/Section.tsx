import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  Icon: LucideIcon;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, Icon, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("space-y-8", className)}>
      <div className="flex items-center gap-4">
        <Icon className="h-10 w-10 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-headline">{title}</h2>
      </div>
      <div className="pl-14">{children}</div>
    </section>
  );
}
