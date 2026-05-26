import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhyWarp from "@/components/WhyWarp";
import OpenSource from "@/components/OpenSource";
import Testimonials from "@/components/Testimonials";
import AgentCta from "@/components/AgentCta";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <WhyWarp />
        <OpenSource />
        <Testimonials />
        <AgentCta />
        <Downloads />
      </main>
      <Footer />
    </>
  );
}
