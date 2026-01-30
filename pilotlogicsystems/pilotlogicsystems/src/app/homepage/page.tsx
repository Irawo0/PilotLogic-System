import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SolutionsShowcase from './components/SolutionsShowcase';
import CodeTransparency from './components/CodeTransparency';
import MethodologyTimeline from './components/MethodologyTimeline';
import ResultsSection from './components/ResultsSection';
import SocialProofSection from './components/SocialProofSection';
import ROICalculator from './components/ROICalculator';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'PilotLogicSystems - The Operating System for Your Business',
  description: 'Replace manual operations with intelligent automation infrastructure. Scale without scaling headcount with enterprise-grade precision and complete transparency.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SolutionsShowcase />
        <CodeTransparency />
        <MethodologyTimeline />
        <ResultsSection />
        <SocialProofSection />
        <ROICalculator />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}