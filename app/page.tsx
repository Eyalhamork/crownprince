import Hero from "@/components/hero";
import { Services } from "@/components/services";
import { TrustIndicators } from "@/components/trust-indicators";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Services />
      <TrustIndicators />
      <ContactSection />
    </main>
  );
}
