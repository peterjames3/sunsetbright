import Hero from "@/app/NativeComponents/Home/Hero";
import About  from '@/app/NativeComponents/Home/About'
import ChooseUs from '@/app/NativeComponents/Home/ChooseUs'
import Solutions from '@/app/NativeComponents/Home/Solutions';
import OurImpact from "@/app/NativeComponents/Home/OurImpact";
import Products from "@/app/NativeComponents/Home/Products";
import Switch from "@/app/NativeComponents/Home/Switch";
import Projects from "@/app/NativeComponents/Home/Projects";
import SolarSystems from '@/app/NativeComponents/Home/SolarSystems';
import Testimonial from '@/app/NativeComponents/Home/Testimonial';
import BlogSection from '@/app/NativeComponents/Home/BlogSection';

export default function Home() {
  return (
   <div className="">
       <Hero /> 
       <About />
       <ChooseUs />
       <Solutions />
       <OurImpact />
       <Products />
       <Switch />
       <Projects />
       <SolarSystems />
       <Testimonial />
       <BlogSection />
    </div>
   
  );
}
