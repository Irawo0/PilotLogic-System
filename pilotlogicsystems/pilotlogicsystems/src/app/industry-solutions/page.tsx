import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import IndustrySolutionsInteractive from './components/IndustrySolutionsInteractive';
import Footer from '@/components/common/Footer';
import BackToTop from '@/components/common/BackToTop';

export const metadata: Metadata = {
  title: 'Industry Solutions - PilotLogicSystems',
  description: 'Discover sector-specific automation architectures and intelligent infrastructure solutions across healthcare, finance, manufacturing, retail, logistics, and professional services. Scale without scaling headcount with our industry-agnostic approach.',
};

export default function IndustrySolutionsPage() {
  return (
    <>
      <Header />
      <IndustrySolutionsInteractive />
      <Footer />
      <BackToTop />
    </>
  );
}