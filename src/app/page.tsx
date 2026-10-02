import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Conditions from "@/components/Conditions";
import HowItWorks from "@/components/HowItWorks";
import WhyPeak from "@/components/WhyPeak";
import TmsSpotlight from "@/components/TmsSpotlight";
import Spravato from "@/components/Spravato";
import Testimonials from "@/components/Testimonials";
import Providers from "@/components/Providers";
import InsuranceBar from "@/components/InsuranceBar";
import FAQ from "@/components/FAQ";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Conditions />
      <HowItWorks />
      <WhyPeak />
      <TmsSpotlight />
      <Spravato />
      <Testimonials />
      <Providers />
      <InsuranceBar />
      <FAQ />
      <InquiryForm />
    </>
  );
}
