import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResultsHero from './components/ResultsHero';
import MetricsOverview from './components/MetricsOverview';
import ResultsInteractive from './components/ResultsInteractive';
import CTASection from './components/CTASection';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Results - PilotLogicSystems',
  description: 'Quantified case studies and outcomes showcasing real business transformation through intelligent automation infrastructure. View documented success metrics, ROI achievements, and validated results across industries.',
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ResultsHero />
        <MetricsOverview />
        <ResultsInteractive />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}