import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  image,
  alt,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  alt?: string;
  href: string;
}) => {
  return (
    <article
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-3 bg-cardBg border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    ><figure>
      {image && (
        <Image
          src={image}
          alt={alt || "Solar solution image"}
          width={200} // Adjust width as needed
          height={10} // Adjust height as needed
          className="rounded-lg object-fit w-full h-[16rem]"
        />
      )}
      </figure>

      <figcaption className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-background hover:text-primary mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </figcaption>
    
      {/* Add the button here */}
      {
        <Link href={href}>
          <button type='button' className=" text-primary hover:text-background  py-2  transition-all delay-300 text-sm hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      }
    </article>
  );
};

export const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};
