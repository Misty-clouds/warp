import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/pricing/PricingCards";
import PricingLogoMarquee from "@/components/pricing/PricingLogoMarquee";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";
import PricingPrivacySecurity from "@/components/pricing/PricingPrivacySecurity";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingHaveMoreQuestions from "@/components/pricing/PricingHaveMoreQuestions";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <PricingCards />
        <PricingLogoMarquee />
        <PricingComparisonTable />
        <PricingPrivacySecurity />
        <PricingFAQ />
        <PricingHaveMoreQuestions />
        <Downloads />
      </main>
      <Footer />
    </>
  );
}
