import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import MissionVisionSection from './components/MissionVisionSection';
import SolutionsSection from './components/SolutionsSection';
import PhilosophySection from './components/PhilosophySection';
import LeadershipSection from './components/LeadershipSection';
import NetworkSection from './components/NetworkSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'About Us - Pilot Logic Systems',
  description: 'Building the Autonomous Enterprise. We exist to remove the Robot Work from human jobs through intelligent automation infrastructure.',
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionVisionSection />
        <SolutionsSection />
        <PhilosophySection />
        <LeadershipSection />
        <NetworkSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}