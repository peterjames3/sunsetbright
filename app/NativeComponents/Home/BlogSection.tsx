import Image from "next/image"
import Link from "next/link"
import { Book, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    image: "/A solar panel installation.jpg",
    category: "Tips & Guides",
    readTime: "4 min read",
    title: "How to Maximize Your Solar Panel Efficiency",
    description:
      "Learn practical tips and maintenance strategies to get the most out of your solar panel installation.",
    date: "January 10, 2025",
    author: "Sarah Njeri",
  },
  {
    image: "/Surreal infrared.jpg",
    category: "Industry Insights",
    readTime: "5 min read",
    title: "The Future of Solar Energy in Kenya: 2025 Outlook",
    description:
      "Learn practical tips and maintenance strategies to get the most out of your solar panel installation.",
    date: "January 15, 2025",
    author: "James Mwangi",
  },
  {
    image: "/Warm golden.jpg",
    category: "Finance",
    readTime: "10 min read",
    title: "Solar Financing Options for Kenyan Homeowners",
    description: "Explore various financing solutions available for residential solar installations in Kenya.",
    date: "January 15, 2025",
    author: "David Kimani",
  },
]


export default function BlogSection() {
  return (
    <section className=" bg-background py-18">
      <div className="wrapper">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold  text-foreground flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-primary"></div>
            Latest Solar Insights
          </h2>
          <p className="text-2xl font-semibold">
            Stay updated with the latest <span className="text-primary">news, tips, and trends in solar energy</span>
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                    <div className='bg-tertiary text-background font-medium  label-text rounded-lg py-1 px-6'>
                    {post.category}
                    </div>
                  <div className="flex items-center text-foreground/50 text-sm">
                    <Book className="size-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="title font-bold mb-2">{post.title}</h3>
                <p className="p-text text-foreground/50 mb-2">{post.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-tertiary-white/70">
                    <time>{post.date}</time>
                    <span className="mx-1">•</span>
                    <span>By: {post.author}</span>
                  </div>
                  <div>
                    <ArrowRight className="size-5 text-tertiary hover:cursor-pointer hover:text-primary transition-color delay-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <Link href="/blog" className="inline-flex items-center text-foreground hover:text-tertiary font-medium">
            Read more from Our Blog
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

