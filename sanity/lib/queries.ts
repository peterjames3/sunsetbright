import { groq } from "next-sanity";

//Get all posts

export const postsQuery = groq`
*[_type == "post"]{
   _id,
   _createdAt,
   description,
    title,
   slug,
   mainImage,
  "imageURL": mainImage.asset->url,
   "authorName": author->name,
   "categories": categories[]->title,
 }
 `;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    _id,
     _createdAt, 
     title,
      description, 
      mainImage, 
      "imageURL": mainImage.asset->url,
   "authorName": author->name,
   "categories": categories[]->title,
      body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`;
