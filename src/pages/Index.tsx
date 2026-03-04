import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import DashboardSection from "@/components/DashboardSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SectorsSection from "@/components/SectorsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "ar" ? "en" : "ar")} />
      <HeroSection lang={lang} />
      <ProblemSection lang={lang} />
      <FeaturesSection lang={lang} />
      <AppPreviewSection lang={lang} />
      <DashboardSection lang={lang} />
      <HowItWorksSection lang={lang} />
      <SectorsSection lang={lang} />
      <PricingSection lang={lang} />
      <FAQSection lang={lang} />
      <ContactSection lang={lang} />
      <FooterSection lang={lang} />
    </div>
  );
};

export default Index;
