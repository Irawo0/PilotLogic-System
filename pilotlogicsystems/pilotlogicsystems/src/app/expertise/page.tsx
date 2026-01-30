import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import TechStackSection from './components/TechStackSection';
import ArchitectureSection from './components/ArchitectureSection';
import ProcessSection from './components/ProcessSection';
import CodeTransparencySection from './components/CodeTransparencySection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Technical Expertise - PilotLogicSystems',
  description: 'Explore our enterprise-grade automation capabilities, technology stack, and proven methodology for building intelligent infrastructure that transforms manual operations into self-sustaining systems.',
};

export default function ExpertisePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <TechStackSection />
        <ArchitectureSection />
        <ProcessSection />
        <CodeTransparencySection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}