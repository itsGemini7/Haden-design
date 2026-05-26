/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import MethodSection from "./components/MethodSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div id="sentinel-landing-wrapper" className="bg-hero-bg min-h-screen relative font-sora selection:bg-primary/30 selection:text-white">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <MethodSection />
        <AboutSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}
