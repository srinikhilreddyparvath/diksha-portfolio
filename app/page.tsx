import { CareerJourney } from "@/components/CareerJourney";
import { Commencement } from "@/components/Commencement";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroThread } from "@/components/IntroThread";
import { Navigation } from "@/components/Navigation";
import { ResearchPractice } from "@/components/ResearchPractice";
import { ResearchProjects } from "@/components/ResearchProjects";
import { Teaching } from "@/components/Teaching";
import { TrainingAndExpertise } from "@/components/TrainingAndExpertise";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <IntroThread />
        <CareerJourney />
        <Commencement />
        <ResearchProjects />
        <ResearchPractice />
        <Teaching />
        <TrainingAndExpertise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
