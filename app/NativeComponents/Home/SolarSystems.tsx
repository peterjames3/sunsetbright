import { Check } from "lucide-react"
import LearnMoreBtn from '@/app/ui/LearnMoreBtn';

const pricingTiers = [
  {
    name: "Standard Solar System",
    power: "3.5KVA",
    price: "400,000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-amber-900" stroke="currentColor">
        <path
          d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.469c-1.006 0-1.97-.43-2.652-1.183l-.548-.547z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    features: ["6 550 Watts Panels", "2 Batteries Tabular", "3.5 KVA Inverter", "Labour & Accessories"],
  },
  {
    name: "Silver Home Solar System",
    power: "3.5 KVA",
    price: "460,000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-amber-900" stroke="currentColor">
        <path
          d="M19 3v12m0 0v6M19 15H5m14 0h2m-16 0v6m0-6H3m2-5V3m16 6h2M5 9H3m14-6h2M5 3H3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    features: ["6 550 Watts Panels","3.5KVA Inverter", "1 battery Lithium", "Labour & Accessories"],
  },
  {
    name: "Gold tier1 Solar Home System",
    power: "5KVA",
    price: "700,000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-amber-900" stroke="currentColor">
        <path
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    features: ["10 550 Watts Panels", "5 KVA Inverter", "2 lithium battery", "Labour and Accessories"],
  },
  
  {
    name: "Gold tier2 Solar Home System",
    power: "8 KVA",
    price: "950,000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-amber-900" stroke="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    features: ["12 550 Watts Panels", "8KVA Invertor", "2 lithium batteries", "Labour & Accessories"],
  },
  {
    name: "Gold tier3 Solar Home System",
    power: "12 KVA",
    price: "1.8M",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-8 text-amber-900" stroke="currentColor">
        <path
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    features: ["16 550 Watts Panel", "12 KVA 3-phase Inverter", "3 lithium battery", "Labour and Accessories"],
  },
]

export default function SolarPricing() {
  return (
    <section className="bg-background py-16 ">
      <div className="wrapper">
      <header className="flex flex-col gap-3">
  <div className="flex items-center gap-4">
    <div className="h-18 w-[2px] bg-primary"></div>
    <div>
      <h2 className="headline font-bold text-foreground">
        Smart Home Solutions: Power, Security & Efficiency for Every Need in Kenya
      </h2>
    </div>
  </div>
  <h3 className="font-semibold title bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
    Discover the ideal home system for your needs—from reliable solar energy to advanced security modules.  
    Upgrade your home with seamless automation, smart surveillance, and energy-efficient solutions.
  </h3>
</header>

        </div>

        <div className=" wrapper grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {pricingTiers.map((tier, index) => (
            <div key={index} className=" rounded-lg shadow-lg overflow-hidden hover:cursor-pointer hover:shadow-xl  hover:scale-105 transition-transform duration-300 easeInOut">
              <div className="bg-tertiary-white text-background p-6 text-center">
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {tier.name} - {tier.power} Ksh {tier.price}
                </h3>
              </div>

              <div className="p-6">
                <div className="flex justify-center mb-6">{tier.icon}</div>

                <ul className="space-y-4 mb-6 h-full flex flex-col items-center justify-center md:justify-start md:items-start">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="size-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground label-text">{feature}</span>
                    </li>
                  ))}
                </ul>
               <div className='mt-5 w-full flex items-center justify-center md:items-start md:justify-start'>
               <LearnMoreBtn />
               </div>
           
              </div>
            </div>
          ))}
        </div>
      
    </section>
  )
}

