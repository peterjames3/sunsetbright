

import FooterCompanyInfo from '@/app/ui/FooterCompanyInfo';
import NewsLetter from "@/app/ui/NewsLetter";
import SupportLinks from '@/app/ui/SupportLinks';
import CompanyLinks from "@/app/ui/CompanyLinks";
import FooterSolutionsList from '@/app/ui/FooterSolutionsList';
import FooterCopyright from '@/app/ui/FooterCopyright';
 export default function Footer() {


  return (
    <footer className="bg-[#0a0e0a] text-white ">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <FooterCompanyInfo />
          </div>
          
          {/* Solutions */}
          <div>
            <FooterSolutionsList />
          </div>
          
          {/* Company */}
          <div>
           <CompanyLinks />
          </div>
          
          {/* Support */}
          <div>
           <SupportLinks />
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-tertiary pt-10 pb-10">
          <NewsLetter />
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-tertiary pt-8 mt-8">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

