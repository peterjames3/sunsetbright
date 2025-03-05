import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SupportLinks() {
  const supportLinks = [
    { name: "Contact Us", link: "/contact" },
    { name: "FAQs", link: "/faqs" },
    { name: "Installation Guide", link: "/installation-guide" },
    { name: "Maintenance Tips", link: "/maintenance-tips" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Support</h3>
      <ul className="space-y-4">
        {supportLinks.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.link}
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowRight className="size-4 mr-2 text-primary transform group-hover:translate-x-1 transition-transform" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
