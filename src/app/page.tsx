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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <AnimatedSection>
            <Header />
          </AnimatedSection>
          
          <div className="mt-20 grid gap-16 md:gap-24">
            <AnimatedSection>
              <About />
            </AnimatedSection>
            <AnimatedSection>
              <Experience />
            </AnimatedSection>
            <AnimatedSection>
              <Projects />
            </AnimatedSection>
            <AnimatedSection>
              <Education />
            </AnimatedSection>
            <AnimatedSection>
              <Skills />
            </AnimatedSection>
            <AnimatedSection>
              <Achievements />
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
