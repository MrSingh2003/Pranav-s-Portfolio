"use client";

import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Section } from "./Section";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send an email
    // For this example, we'll just show a success toast
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" title="Get In Touch" Icon={Mail}>
      <div className="max-w-xl mx-auto">
        <p className="text-center text-muted-foreground mb-8">
          Have a project in mind or just want to say hello? Drop me a line.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
          </div>
          <Input type="text" placeholder="Subject" required />
          <Textarea placeholder="Your Message" rows={6} required />
          <div className="text-center">
            <Button type="submit" size="lg">
              <Send className="mr-2" />
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
