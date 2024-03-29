import Card from "@/components/Card";
import FaceSection from "@/components/FaceSection";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import TalksSection from "@/components/TalksSection";
import Uses from "@/components/Uses";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Welcome to my portfolio</h1> */}
      <FaceSection />
      <ProjectSection />
      <TalksSection />
      <Card />
      <Uses />
      <Contact />
      <Footer />
    </main>
  );
} 
