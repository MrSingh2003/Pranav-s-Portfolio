import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { AnimatedSection } from "@/components/portfolio/AnimatedSection";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { MainNav } from "@/components/portfolio/MainNav";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Separator } from "@/components/ui/separator";
import { ClientOnly } from "@/components/client-only";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <MainNav />
      <main className="flex-1">
        <Header />
        <div className="container mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="grid gap-20 md:gap-28">
            <AnimatedSection animation="slide-in-from-left">
              <About />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-from-right">
              <Education />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-from-left">
              <Experience />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-from-right">
              <Projects />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-from-left">
              <Skills />
            </AnimatedSection>
            <AnimatedSection animation="slide-in-from-right">
              <Achievements />
            </AnimatedSection>
            <Separator />
            <AnimatedSection animation="fade-in-up">
              <ClientOnly>
                <Contact />
              </ClientOnly>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
