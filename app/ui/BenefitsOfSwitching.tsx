import { Check, Calendar } from "lucide-react"
import Assessment from "@/app/ui/Assessment";


const benefits = [
    {
      title: "Cost Savings",
      description: "Significant reduction in electricity bills.",
    },
    {
      title: "Energy Independence",
      description: "Reduced reliance on grid electricity, empowering homeowners with solar energy.",
    },
    {
      title: "Eco-friendly",
      description: "A clean, renewable energy solution that contributes to a greener planet.",
    },
    {
      title: "Increased Property Value",
      description:
        "Homes powered by solar energy typically see an increase in market value, making it a great long-term investment.",
    },
  ]
export default function BenefitsOfSwitching(){
    return(
        <section className="wrapper px-4 py-12">
        <h4 className="title font-bold mb-8">Benefits of Switching to Solar Power in Kenya</h4>
  
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 rounded-full p-1 bg-primary">
                <Check className="size-4 text-tertiary-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Investment Range */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Investment Range for Solar Solutions in Kenya</h2>
          <p className="text-gray-600 mb-4">
            The cost of transitioning to solar energy in Kenya varies, typically ranging from:
          </p>
          <p className="text-3xl font-bold mb-4">KSh 185,000 - 999,000</p>
          <p className="text-gray-600">The final price depends on the size of the system and specific requirements.</p>
        </div>
  
        {/* Timeline and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="bg-primary rounded-full py-3 px-6 flex items-center gap-2 p-text font-semibold text-foreground">
            <Calendar className="w-5 h-5" />
            <span>Average Timeline: 1-3 weeks from consultation to completion</span>
          </div>
  <Assessment />
        </div>
      </section>

    )
}