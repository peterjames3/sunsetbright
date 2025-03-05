'use client';
import { useState } from 'react';
//import { toast } from '@/hooks/use-toast';

export default function NewsLetter(){
    const [email, setEmail] = useState('');
    
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Handle subscription (in a real app, this would connect to a backend)
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
      variant: "default",
    });
    
    setEmail('');
  };

  return(
    <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6 text-center">
              Stay updated with the latest in solar technology and energy solutions
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-textColor text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-tertiary-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-tertiary hover:cursor-pointer hover:text-background  rounded-md transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
  )
}