import { SanityDocument } from "@sanity/client";
//import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import SocialShare from "@/app/ui/SocialShare";
import { format } from 'date-fns';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import RecentPosts from "@/app/ui/RecentPosts";
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => {
  return builder.image(source)
};

type Category ={
  title: string;
  description: string;
}


export default function Post({ post }: { post: SanityDocument }) {
  if (!post) return <p>Loading ...</p>;

  return (
    <div className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1440px] px-4 md:px-0 mt-[2rem]">
      <ul className='flex gap-[0.2rem] p-text mb-3'>
        <li className="hover:text-primary font-semibold transition-color delay-300">
          <Link
            href="/"
            
          >
            Home
          </Link>
        </li>
        <li>&gt;</li>
        <li className="hover:text-primary font-semibold transition-color delay-300">
            <Link href="/blog">Blog</Link>
          </li>
          <li>&gt;</li>

        <li className="hover:text-primary font-semibold transition-color delay-300">{post.title}</li>
      </ul>
      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-6">
          {/* Left Social Share - Sticky */}
  <section className="col-span-1 p-4 h-auto sm:min-h-[30rem] sm:sticky sm:top-0 sm:h-screen overflow-y-auto">
    <div className="sm:sticky sm:top-4">
      <SocialShare title={post.title} />
    </div>
  </section>
        <section className="col-span-2 p-4 prose prose-xl ">
          <header className=" py-2 flex flex-col  space-y-8">
            <nav className="font-semibold w-1/3 text-[0.9rem] text-center text-textColor bg-primary  px-6 py-3  transition-all delay-300 hover:bg-transparent ">
              <Link href="/blog" className=" no-underline">
                <span className='mr-[0.2rem]'> &larr;</span>
                Go Back
              </Link>
            </nav>
            <h3 className="text-3xl font-semibold  text-foreground">
              {post.title}
             
            </h3>
            <span className='text-[0.97rem] font-medium text-tertiary-white'>Written on: {format(new Date(post._createdAt), "MM/dd/yyyy")}</span>

          </header>
          <figure className="w-full h-[320px] rounded-md overflow-hidden">
            {post?.mainImage && (
              <Image
              src={urlFor(post.mainImage).width(1200).height(650).url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
              alt={post?.mainImage?.alt || 'Post image'}
              width={1000}
              height={650}
              className="rounded-md"
              />
            )}
          </figure>
          <figcaption className="flex flex-col pt-4 space-y-2">
            <div className=" flex gap-2 items-center p-text text-textColor font-semibold"> <span className='font-bold'>Category: </span>
              {post.categories.map((category : Category, id : number) =>(
                <h3 className='font-medium' key={id}>{category.title}</h3>
              )) || "Uncategorized post"}
            </div>
            <p className="label-text font-medium "> <span className='font-semibold'>written by : </span>  {post.authorName || "Unknown Author"}</p>
          </figcaption>

           <article>
            {post?.body && (
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => <p className='p- space-y-2'>{children}</p>,
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold">{children}</h2>
                    ),
                  },
                }}
              />
            )}
          </article> 
        </section>
         {/* Right Social Share - Sticky */}
  <section className="col-span-1 p-4 min-h-[30rem]  sticky top-0 h-screen overflow-y-auto">
    <div className="sticky top-4">
    <header className="text-foreground  mb-12 border-l-4 rounded-sm border-foreground/90 px-2 title  font-semibold ">
          Recently Published
        </header>
      <RecentPosts />
    </div>
  </section> 
      </div>
    </div>
  );
}