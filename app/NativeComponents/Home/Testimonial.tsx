"use client";


import { TestimonialCards } from "@/app/ui/TestimonialCards";

export default function Testimonial() {
  return (
    <section className='bg-foreground w-full py-8 '>
        <header className="wrapper">
        <div className="space-y-4 mb-12">
          <h2 className="headline text-background font-bold flex items-center gap-2">
            <div className="w-1 h-6 bg-primary"></div>
            Customer Stories
          </h2>
          
          <h3 className="title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
            What our clients say about us.
          </h3>
        </div>
        </header>
      
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-foreground dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <TestimonialCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I had a fantastic experience with SunsetBright Energy! From the initial consultation to the final installation, their team was professional, knowledgeable, and efficient. They guided me through every step of the process, answered all my questions, and made sure the system was set up perfectly. The installation was quick, and I've already seen a significant drop in my energy bills. Highly recommend them for anyone considering solar energy!.",
    name: "Ann Gichuki",
    title: "Homeowner",
  },
  {
    quote:
      "I contacted SunsetBright Energy Limited for a premier solar installation and in deed, they did not disappoint.  They have proved to be a reliable solar installer and now I can say I have a sustainable energy solution. Cheers!!.",
    name: "Solomon Mwangi",
    title: "Homeowner",
  },
  {
    quote: "Good customer service and professional in what they do...kudos you guys made me learn a lot of stuff and saved alot of cash..I will strongly recommend you anyday.",
    name: "Pobert Nyandoya",
    title: "Client",
  },
  {
    quote:
      "Worked with them.The expertise is commendable and when called upon incase of system issues the response is prompt.I highly recommend them.",
    name: "Prudence muriithi",
    title: "Client",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Homeowner",
  },
];
