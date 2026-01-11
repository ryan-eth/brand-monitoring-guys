import { getPostMetadata } from "@/lib/notion/queries"
import { BlogCard } from "@/components/blog/blog-card"

export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: "Blog",
  description: "Insights and updates on brand protection and monitoring.",
}

export default async function BlogPage() {
  const posts = await getPostMetadata()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights and updates on brand protection and monitoring
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts yet. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
