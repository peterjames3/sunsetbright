
import FeaturesSectionDemo from "@/app/ui/FeaturesSectionDemo";
export default function ChooseUs(){
  
    return(
       <section className='w-full bg-background py-5 min-h-[18rem]'>
        <div className='wrapper'>
            <header className='flex flex-col gap-3'>
                <div className='flex items-center gap-4  '>
                 <div className='h-6 w-[2px] bg-primary'></div>
                 <div>
                 <h2 className='headline font-bold text-foreground'>Why Choose Us </h2>
                 </div>
                    
                </div>
              <h3 className='title font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent'>      Power your home or business with expert solar, electrical, and security solutions trusted by thousands
              </h3>
            </header>
      </div>
      <div>
         {/* Benefits Grid */}
          <FeaturesSectionDemo />
      </div>

       </section>
    )
}