export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // Markdown content
  coverImage?: string
  publishedDate: string
  author?: string
  tags?: string[]
  readingTime?: number
}

export interface BlogPostMetadata {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage?: string
  publishedDate: string
  readingTime?: number
  tags?: string[]
}
