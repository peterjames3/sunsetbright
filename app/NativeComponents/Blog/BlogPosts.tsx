import type { SanityDocument } from '@sanity/client';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postsQuery, postPathsQuery } from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url';
import { client } from  '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';


const builder = imageUrlBuilder(client);
//import { format } from 'date-fns';
export default async function BlogPosts(){
    // let posts : SanityDocument[] = [];
    // let postPath : SanityDocument[] =[]
    // try{
    //     posts = await sanityFetch<SanityDocument[]>({
    //         query: postsQuery,
    //     });
    //     postPath = await sanityFetch<SanityDocument[]>({
    //         query: postPathsQuery,
    //     });
    // } catch(error){
    //     console.log(`Error Fetching Posts: ${error}`);
    // }
    // console.log(postPath);


    return(
        <section className=' wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {posts.map((post, index) => (
            <article key={index} className='bg-white rounded-lg  hover:shadow-md  transition-transform duration-300 ease-in-out'>
                <figure>
                <Image
                  src={builder
                    .image(post.mainImage)
                    .width(420)
                    .height(200)
                    .url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
                 alt={post.title}
                width={420}
                height={200} className='rounded-t-lg' />
                 </figure>
                <figcaption className='flex flex-col gap-2 p-3'>
                    <div className=' bg-tertiary truncate text-background  label-text rounded-lg py-1 px-2  font-medium'>{post.categories}</div>

                    <h3  className='p-text text-foreground font-bold '>{post.title}</h3>
                
                    <div className="flex items-center justify-between">
                  <div className="text-sm text-tertiary-white/70">
                    <time>{format(new Date(post._createdAt), "MM/dd/yyyy")}</time>
                    <span className="mx-1">•</span>
                    <span>By: {post.authorName || 'Unknown Author'}</span>
                  </div>
                  <div>
                    <Link href={`/blog/${post.slug.current}`}> 
                    <ArrowRight className="size-5 text-tertiary hover:cursor-pointer hover:text-primary transition-color delay-300" /></Link>
                   
                  </div>
                </div>
                </figcaption>
            </article>
        ))}
     
        </section>
    )
}