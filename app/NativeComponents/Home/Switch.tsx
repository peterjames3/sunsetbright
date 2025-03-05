
import SolarSecurityTabs from '@/app/ui/SolarSecurityTabs';
import BenefitsOfSwitching from '@/app/ui/BenefitsOfSwitching';
export default function Switch(){
  
    return(
       <section className='w-full bg-background py-5 min-h-[18rem]'>
        <div className='wrapper'>
            <header className='flex flex-col gap-3'>
                <div className='flex items-center gap-4  '>
                 <div className='h-6 w-[2px] bg-primary'></div>
                 <div>
                 <h2 className='headline font-bold text-foreground'>Switching To Solar Power  & Enhance Your Security Today in Kenya</h2>
                 </div>
                    
                </div>
              <h3 className=' font-semibold title bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>Exlore the perfect solar solution for your home and make switch to solar power while improving your security with our  solutions</h3>
            </header>
      </div>
      <div>
         {/* Benefits Grid */}
          <SolarSecurityTabs />
          <BenefitsOfSwitching />
      </div>

       </section>
    )
}