import { SanityDocument } from "@sanity/client";
import { postQuery, postPathsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Post from "@/app/NativeComponents/Blog/Post";
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

// Set revalidation interval for ISR
export const revalidate = 60;

// Use generateStaticParams to define paths for static generation
export async function generateStaticParams() {
  const slugs = await client.fetch(postPathsQuery);

  // Ensure slugs is an array of strings
  return slugs.map((slug: string) => ({
    slug,
  }));
}

// Server Component to fetch and render the post data based on slug
const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params; // No need to await params
  console.log(`Here is the slug: ${slug}`);

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  // Fallback rendering if post data is missing
  if (!post) {
    notFound();
  }

  return <Post post={post} />;
};

export default PostPage;