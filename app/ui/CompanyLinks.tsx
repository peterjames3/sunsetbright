import { ArrowRight } from "lucide-react";

export default function CompanyLinks() {
  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Our Projects", link: "/projects" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Latest News", link: "/news" },
  ];

  return (
    <>
      <h3 className="text-xl font-semibold mb-6">Company</h3>
      <ul className="space-y-4">
        {companyLinks.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.link}
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowRight className="size-4 mr-2 text-primary transform group-hover:translate-x-1 transition-transform" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
