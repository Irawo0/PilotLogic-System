import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SystemArchitectureSection from './components/SystemArchitectureSection';
import TechStackSection from './components/TechStackSection';
import IntegrationSection from './components/IntegrationSection';
import SecuritySection from './components/SecuritySection';
import PerformanceSection from './components/PerformanceSection';
import CodeExamplesSection from './components/CodeExamplesSection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Architecture Showcase - PilotLogicSystems',
  description: 'Explore our enterprise-grade technical architecture, code transparency, and intelligent automation infrastructure. Built with Python, OpenAI, AWS, and modern DevOps practices for scalable business operations.',
};

export default function ArchitectureShowcasePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SystemArchitectureSection />
        <TechStackSection />
        <IntegrationSection />
        <SecuritySection />
        <PerformanceSection />
        <CodeExamplesSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}