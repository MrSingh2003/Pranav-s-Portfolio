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
      <div className="flex items-center gap-3">
        <Icon className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}
