import { cn } from "@/lib/utils";
import {
  IconSun,
  IconHomeBolt,
  IconCurrencyDollar,
  IconBatteryCharging,
  IconLeaf,
  IconWallet,
  IconHelp,
  IconShieldCheck,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Expert Installation",
      description:
        "Our certified technicians ensure a seamless and efficient solar panel setup.",
      icon: <IconHomeBolt />,
    },
    {
      title: "Energy Independence",
      description:
        "Generate your own electricity and reduce reliance on the power grid.",
      icon: <IconSun />,
    },
    {
      title: "Cost Savings",
      description:
        "Significantly lower your electricity bills and enjoy long-term savings.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Performance",
      description:
        "Our high-quality solar panels provide a consistent energy supply, even during outages.",
      icon: <IconBatteryCharging />,
    },
    {
      title: "Eco-Friendly",
      description:
        "Go green and reduce your carbon footprint with sustainable energy solutions.",
      icon: <IconLeaf />,
    },
    {
      title: "Flexible Financing",
      description:
        "We offer affordable financing options to make solar accessible for everyone.",
      icon: <IconWallet />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our team is always ready to assist you with any queries or concerns.",
      icon: <IconHelp />,
    },
    {
      title: "Long-Term Warranty",
      description:
        "We stand by our products with extensive warranties for peace of mind.",
      icon: <IconShieldCheck />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-2 py-10 wrapper mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-4 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-tertialy-white dark:bg-neutral-700 group-hover/feature:bg-tertiary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground ">
          {title}
        </span>
      </div>
      <p className="text-[0.9rem] text-primary dark:text-tertiary max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
