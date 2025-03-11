
import ServicesBtn from "@/app/ui/ServicesBtn";
import LearnMoreBtn from "@/app/ui/LearnMoreBtn";
import SolarCarousel from "@/app/ui/SolarCarousel";
export default function About(){
    const carouselImages = [
        {
          src: "/A solar panel installation.jpg",
          alt: "Solar panel installation with technician on rooftop overlooking rural landscape",
        },
        {
          src: "/High-angle view of a home with solar panels at sunset.jpg",
          alt: "Solar panels on residential home",
        },
        {
          src: "/Silhouetted backlighting, extreme macro close-up. Solar-powered water pump system in rural Kenya.jpg",
          alt: "Solar farm installation",
        },
        {
          src: "/Solar panels on rooftops of small homes and businesses. A technician works on a panel.jpg",
          alt: "Technician installing solar panels",
        },
        {
          src: "/modern solar water heater on a contemporary house roof.jpg",
          alt: "modern solar water heater on a contemporary house roof",
        },
        {
          src: "/a professional electrical wiring diagram for residential buildings.jpg",
          alt: "a professional electrical wiring diagram for residential buildings",
        },
        {
          src: "/Alltech-Electric-Fence-Installation-Services-In-Kenya.webp",
          alt: "Alltech-Electric-Fence-Installation-Services-In-Kenya",
        },
        
      ]
    return(
       <section className='w-full bg-foreground py-5 min-h-[18rem]'>
        <div className='wrapper'>
            <header className='flex flex-col gap-3'>
                <div className='flex items-center gap-4  '>
                 <div className='h-6 w-[2px] bg-primary'></div>
                 <div>
                 <h2 className='headline font-bold text-background'>About</h2>
                 </div>
                    
                </div>
              <h3 className='title  font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent'>Leading Solar Power Company in Kenya for Affordable and Reliable Solutions</h3>
            </header>
        </div>
        <div className='wrapper flex flex-col-reverse md:flex-row  gap-4 md:gap-8 min-h-[35rem]'>
            <div className="w-full md:w-3/5 h-full">
            <SolarCarousel images={carouselImages} autoPlayInterval={5000} backgroundColor="#e0eae4" />
            </div>
            <div className='w-full md:w-2/5  flex flex-col items-center  justify-center '>
             <p className='text-background p-text'>
             At <span className='font-semibold text-primary'>SunsetBright Energy Limited</span>, we specialize in providing professional and affordable solar panel installation and maintenance services across Kenya. Whether you&apos;re looking to power your home, business, or institution, our team ensures seamless and efficient installations tailored to your energy needs. With years of experience, we offer trusted maintenance services to keep your solar systems operating at peak performance. Our clients in Nairobi, Mombasa, and beyond trust us to deliver reliable and sustainable energy solutions. 
             </p>
                <div className=' my-3 flex gap-5 w-full items-center justify-center md:justify-start'>
                       <ServicesBtn />
                       <LearnMoreBtn />
                   
                       </div>
            </div>
        </div>

       </section>
    )
}