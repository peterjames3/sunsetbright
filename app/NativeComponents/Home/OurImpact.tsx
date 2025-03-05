import Impacts from "@/app/ui/Impacts";

export default function OurImpact(){
    return(
            <section className='w-full bg-background py-5 min-h-[18rem]'>
                <div className='wrapper'>
                    <header className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4  '>
                         <div className='h-6 w-[2px] bg-primary'></div>
                         <div>
                         <h2 className='headline font-bold text-foreground'>Our Impact</h2>
                         </div>
                            
                        </div>
                      
                    </header>
              </div>
              <div>
              
                     {/* Stats Section */}
        <div className="">
        
            <Impacts />
        
        </div>
              </div>
        
               </section>
    )
}