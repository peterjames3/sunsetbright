import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Post from "@/app/NativeComponents/Blog/Post";
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';


export const revalidate = 60;

export async function generateStaticParams() {

  const posts = await client.fetch(postPathsQuery);

  const reservedRoutes = ['about',  'home'];
  return posts.filter((post: { slug: string }) => !reservedRoutes.includes(post.slug));
}
 
type Params = Promise<{slug: string}>
const PostPage = async ({ params } :{params: Params}) => {
  const { slug } =  await params;

 
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  // Fallback rendering if post data is missing
  if (!post) {
    notFound()
  }


  return <Post post={post} />;
};

export default PostPage;