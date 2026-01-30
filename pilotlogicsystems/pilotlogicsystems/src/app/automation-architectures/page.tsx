import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AutomationArchitecturesInteractive from './components/AutomationArchitecturesInteractive';

export const metadata: Metadata = {
  title: 'Automation Architectures - PilotLogicSystems',
  description: 'Explore visual workflow diagrams and automation architectures for different sectors. See how intelligent automation transforms operations across Finance, Logistics, Sales, and more.',
};

export default function AutomationArchitecturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AutomationArchitecturesInteractive />
    </div>
  );
}