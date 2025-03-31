import type { SanityDocument } from '@sanity/client';
import { sanityFetch } from '@/sanity/lib/fetch';

// Define the Category type
type Category = {
  title: string;
  description: string;
};
import { postsQuery, postPathsQuery } from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url';
import { client } from  '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';


const builder = imageUrlBuilder(client);

export default async function BlogPosts(){
     let posts : SanityDocument[] = [];
     let postPath : SanityDocument[] =[]
     try{
        posts = await sanityFetch<SanityDocument[]>({
             query: postsQuery,
         });
        postPath = await sanityFetch<SanityDocument[]>({
             query: postPathsQuery,
         });
     } catch(error){
         console.log(`Error Fetching Posts: ${error}`);
     }
     console.log(postPath);
     console.log(posts)


    return(
        <section className=' wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {posts.map((post, index) => (
            <article key={index} className='bg-white rounded-lg  hover:shadow-md  transition-transform duration-300 ease-in-out'>
                <figure>
                <Image
                  src={builder
                    .image(post.imageURL)
                    .width(420)
                    .height(200)
                    .url() ||"/3d-view-personal-computer-with-vegetation.jpg"}
                 alt={post.title}
                width={420}
                height={200} className='rounded-t-lg' />
                 </figure>
                <figcaption className='flex flex-col gap-2 p-3'>
    
                    <div className=' w-[12rem] bg-tertiary text-center  text-background  label-text rounded-lg py-[0.29rem]   font-medium'>{post.categories.map((category : Category, id : number) =>(
                      <ul key={id}> <li>{category.title}</li></ul>
                    ))}</div>

                    <h3  className='text-[1.2rem] text-textColor font-bold '>{post.title}</h3>
                    <div className='text-foreground line-clamp-3 p-text   font-medium'>{post.categories.map((category : Category, id : number) =>(
                      <p key={id}> {category.description}</p>
                    ))}</div>
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