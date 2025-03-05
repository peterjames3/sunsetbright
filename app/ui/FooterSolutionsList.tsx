import { ArrowRight } from "lucide-react";

export default function FooterSolutionsList() {
  const solutions = [
    { name: "Solar Panels", link: "/solutions/solar-panels" },
    { name: "Battery Storage", link: "/solutions/battery-storage" },
    { name: "Solar Water Pumps", link: "/solutions/solar-water-pumps" },
    { name: "Commercial Solar", link: "/solutions/commercial-solar" },
    { name: "Residential Solar", link: "/solutions/residential-solar" },
    { name: "Solar Panel Installation", link: "/solutions/installation" },
  ];

  return (
    <>
      <h3 className="text-xl font-semibold mb-6">Solutions</h3>
      <ul className="space-y-4">
        {solutions.map((item, idx) => (
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
