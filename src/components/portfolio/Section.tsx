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
    <section id={id} className={cn("space-y-6 md:space-y-8", className)}>
      <div className="flex items-center gap-3 md:gap-4">
        <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-headline">{title}</h2>
      </div>
      <div className="pl-0 md:pl-14">{children}</div>
    </section>
  );
}
