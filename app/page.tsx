import { Hero } from '@/components/Hero';
import { CoreCapabilities } from '@/components/CoreCapabilities';
import { EngineeringApproach } from '@/components/EngineeringApproach';
import { TopologyArchitecture } from '@/components/TopologyArchitecture';
import { CaseStudies } from '@/components/CaseStudies';
import { TechStackMatrix } from '@/components/TechStackMatrix';
import { ProofMetrics } from '@/components/ProofMetrics';
import { BehindDevistio } from '@/components/BehindDevistio';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <EngineeringApproach />
      <TopologyArchitecture />
      <CaseStudies />
      <TechStackMatrix />
      <ProofMetrics />
      <BehindDevistio />
      <ContactSection />
      <Footer />
    </>
  );
}
