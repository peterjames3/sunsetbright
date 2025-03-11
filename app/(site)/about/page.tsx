import AboutHero from "@/app/NativeComponents/About/AboutHero";
import Journey from "@/app/NativeComponents/About/Journey";
import CoreValues from '@/app/NativeComponents/About/CoreValues';
import WhyUs from '@/app/NativeComponents//About/WhyUs';
import BrandPatterns from "@/app/NativeComponents/About/BrandPatterns";
import CTA from '@/app/NativeComponents/About/CTA';
export default function About(){
    return(
      <>
  <AboutHero />
  <Journey />
  <CoreValues /> 
  <WhyUs />
  <BrandPatterns />
  <CTA />
  </>
    )
}