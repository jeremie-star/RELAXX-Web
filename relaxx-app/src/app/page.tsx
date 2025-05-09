import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { AboutSection } from '@/components/about-section';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
}