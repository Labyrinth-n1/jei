import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Enregistrer le plugin GSAP pour la fonction ScrollTo
gsap.registerPlugin(ScrollToPlugin);

const Index = () => {
  useEffect(() => {
    // Votre code d'animation GSAP peut aussi être ajouté ici si nécessaire
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="hero" className="section">
        <Hero />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="timeline" className="section">
        <Timeline />
      </div>
      <div id="register" className="section">
        <RegisterForm />
      </div>
      <div id="footer" className="section">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
