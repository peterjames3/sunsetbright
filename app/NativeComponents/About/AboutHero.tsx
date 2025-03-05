import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero(){
    return(
        <section className='w-full relative bg-gradient-to-r from-gray-600 to-gray-900 h-[32rem]'>
            <Image
                     src="/Surreal infrared.jpg" 
                     fill={true}
                     style={{ objectFit:'cover' }}
                     priority={true}
                     className="object-fill mix-blend-overlay"
                     alt="Photographer exploring an abandoned location"
                   />
                   <header className="absolute top-[60%] left-1/2 flex flex-col items-center justify-center pt-0 md:pt-28 md:text-start transition -translate-x-1/2 -translate-y-1/2  w-full sm:max-w-[600px] md:max-w-[840px] lg:max-w-[64rem] px-5 sm:px-0 text-background gap-3 ">
                      
                           <h2 className=" display pb-5 font-bold sm:pb-2 underline">
                             <span className='font-extrabold underline text-primary '> About </span>
                             Us
                           </h2>
                          <ul className='flex gap-[0.2rem] p-text'>
                            <li className='text-primary'><Link href='/'>Home</Link></li>
                            <li>&gt;</li>
                            <li>About Us</li>

                          </ul>
                        
                     
                        
                         
                          
                         </header>
        </section>
    )
}