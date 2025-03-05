import Image from 'next/image';
import { Star, CircleCheckBig  } from 'lucide-react';
import ProductBtn from '@/app/ui/ProductBtn';



export default function Products(){
   const productBenefits = [
      { icon:<CircleCheckBig />, name: 'High-efficiency monocrystalline cells',  },
      { icon:<CircleCheckBig />, name:'25-years  performance warranty',},
      { icon:<CircleCheckBig />, name:'High-quality anodized aluminum frames', },
      { icon:<CircleCheckBig />, name:'Smart monitoring capability', },
   ]
  
    return(
       <section className='w-full flex flex-col gap-14 bg-foreground py-5 min-h-[18rem]'>
        <div className='wrapper'>
            <header className='flex flex-col gap-3'>
                <div className='flex items-center gap-4  '>
                 <div className='h-6 w-[2px] bg-primary'></div>
                 <div>
                    
                 <h2 className='headline font-bold text-background'>Some of Our Products</h2>
                 </div>
                    
                </div>
              <h3 className='title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent'>Discover range of High-Performance solar products in Kenya market from Monorystalline panels to invertes.</h3>
            </header>
      </div>
      <div>
         {/* Popular Product */}
         <div className=' wrapper flex flex-col md:flex-row gap-8 md:gap-10 '>
         <section className='w-full md:1/5 '>
         <header className='flex flex-col gap-3'>
            <div className='rounded-3xl text-[1rem] items-center text-background bg-banner flex gap-3 w-[12rem] justify-center py-3'> <Star/>Featured Product </div>
            <h4 className='title font-semibold text-background'>Jinko Monocrystalline PV Module, 55W</h4>
            
         </header>
         <p className='p-text py-3 text-background '>
         Our most efficient solar panel with 22% conversion efficiency and advanced weather resistance
         </p>
          
            {productBenefits.map((productBenefit)=>
            <ul key={productBenefit.name} className='flex flex-col text-background gap-5 space-y-3'>
             <li className='flex gap-2 py-2'>{productBenefit.icon} {productBenefit.name}</li>
             
            </ul>
            )}
            <div className='mt-6'>
               <ProductBtn/>
            </div>
          

         </section>
         <figure className='w-full md:w-4/5  rounded-md overflow-hidden relative'>
         <Image
           src= "/550w-mono.-DCRA3TKS.webp"
           alt= "image of Jinko Monocrystalline PV Module, 55W"
           width={1000}
           height={400}
           
           className='w-full h-full object-cover'
           />
         <figcaption className='absolute bottom-1 h-10 right-2  text-background bg-tertiary flex items-center justify-center px-4 rounded-md p-text font-semibold'>
         From Ksh 9,500/panel
         </figcaption>
         </figure>
         </div>
         
      </div>

       </section>
    )
}