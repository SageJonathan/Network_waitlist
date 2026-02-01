import CTA from "@/components/landing/cta";
import Eng1 from "@/components/landing/eng1";
import Eng2 from "@/components/landing/eng2";
import Eng3 from "@/components/landing/eng3";
import Eng4 from "@/components/landing/eng4";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";


export default function Landing() {
  return (
    <div>
      <Hero />
      <Eng1 />
      <Eng2 />
      <Eng3 />
      <Eng4 />
      <CTA />
      <Footer />
    </div>
  );
}