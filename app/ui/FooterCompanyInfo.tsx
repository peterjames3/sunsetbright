import { MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterCompanyInfo() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <nav className="font-bold text-[1.2rem] lg:text-[1.5rem]">
          <Link href="/" className="flex items-center gap-1 lg:gap-2">
            <Image
              src="/favicon-32x32.png"
              alt="SunsetBright logo"
              height={30}
              width={30}
              priority
              className="object-contain"
            />
            <div className='flex items-center'>
            <span className="text-background">Sunset</span>
            <span className="text-primary">Bright</span>.
            </div>
          </Link>
        </nav>
      <p>Leading the way in solar energy solutions across Kenya. Transforming how homes and businesses power their future</p>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-background/ hover:text-background/70 transition-colors">
            <MapPin className="size-5 text-primary" />
            <span>Nairobi, Kenya</span>
          </div>

          <a
            href="mailto:sunsetbrightenergylimited@gmail.com"
            className="flex items-center gap-2 text-background hover:text-background/70 transition-colors"
          >
            <Mail className="size-5 text-primary" />
            <span>sunsetbrightenergylimited@gmail.com</span>
          </a>

          <a
            href="tel:+254748811358"
            className="flex items-center gap-2 text-background hover:text-background/70 transition-colors"
          >
            <Phone className="size-5 text-primary" />
            <span>+254 716 783432</span>
          </a>
        </div>
      </div>
      </div>
    
  );
}
