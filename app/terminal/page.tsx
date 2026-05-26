import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import TerminalHero from "@/components/terminal/TerminalHero";
import TerminalLogoMarquee from "@/components/terminal/TerminalLogoMarquee";
import TerminalBento from "@/components/terminal/TerminalBento";
import TerminalNativeSection from "@/components/terminal/TerminalNativeSection";
import TerminalFeatureList from "@/components/terminal/TerminalFeatureList";
import TerminalAgentList from "@/components/terminal/TerminalAgentList";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

export default function TerminalPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <TerminalHero />
        <TerminalLogoMarquee />
        <TerminalBento />
        <TerminalNativeSection />
        <TerminalFeatureList />
        <TerminalAgentList />
        <Downloads />
      </main>
      <Footer />
    </>
  );
}
