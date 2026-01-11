import { notion, n2m } from "./client"
import type { BlogPost, BlogPostMetadata } from "./types"

const DATABASE_ID = process.env.NOTION_DATABASE_ID || ""

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!DATABASE_ID) {
    console.warn("NOTION_DATABASE_ID is not set")
    return []
  }

  try {
    // Use search API to query database items
    const response = await notion.search({
      filter: {
        property: "object",
        value: "page",
      },
      sort: {
        direction: "descending",
        timestamp: "last_edited_time",
      },
    })

    // Filter pages that belong to our database and are published
    const databasePages = response.results.filter((page: any) => {
      return (
        page.object === "page" &&
        page.parent?.type === "database_id" &&
        page.parent?.database_id === DATABASE_ID &&
        page.properties?.Published?.checkbox === true
      )
    })

    const posts = await Promise.all(
      databasePages.map(async (page: any) => {
        const mdBlocks = await n2m.pageToMarkdown(page.id)
        const content = n2m.toMarkdownString(mdBlocks)

        return {
          id: page.id,
          slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
          title: page.properties.Title?.title?.[0]?.plain_text || "",
          excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
          content: content.parent || "",
          coverImage: page.properties["Cover Image"]?.files?.[0]?.file?.url,
          publishedDate: page.properties["Published Date"]?.date?.start || "",
          author: page.properties.Author?.rich_text?.[0]?.plain_text,
          tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        } as BlogPost
      })
    )

    // Sort by published date
    return posts.sort((a, b) => {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    })
  } catch (error) {
    console.error("Error fetching posts from Notion:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!DATABASE_ID) {
    console.warn("NOTION_DATABASE_ID is not set")
    return null
  }

  try {
    // Search for the specific page
    const response = await notion.search({
      filter: {
        property: "object",
        value: "page",
      },
    })

    // Find the page with matching slug in our database
    const page: any = response.results.find((p: any) => {
      return (
        p.object === "page" &&
        p.parent?.type === "database_id" &&
        p.parent?.database_id === DATABASE_ID &&
        p.properties?.Published?.checkbox === true &&
        p.properties?.Slug?.rich_text?.[0]?.plain_text === slug
      )
    })

    if (!page) {
      return null
    }

    const mdBlocks = await n2m.pageToMarkdown(page.id)
    const content = n2m.toMarkdownString(mdBlocks)

    return {
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
      content: content.parent || "",
      coverImage: page.properties["Cover Image"]?.files?.[0]?.file?.url,
      publishedDate: page.properties["Published Date"]?.date?.start || "",
      author: page.properties.Author?.rich_text?.[0]?.plain_text,
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    } as BlogPost
  } catch (error) {
    console.error("Error fetching post from Notion:", error)
    return null
  }
}

export async function getPostMetadata(): Promise<BlogPostMetadata[]> {
  if (!DATABASE_ID) {
    console.warn("NOTION_DATABASE_ID is not set")
    return []
  }

  try {
    // Use search API to query database items
    const response = await notion.search({
      filter: {
        property: "object",
        value: "page",
      },
      sort: {
        direction: "descending",
        timestamp: "last_edited_time",
      },
    })

    // Filter pages that belong to our database and are published
    const databasePages = response.results.filter((page: any) => {
      return (
        page.object === "page" &&
        page.parent?.type === "database_id" &&
        page.parent?.database_id === DATABASE_ID &&
        page.properties?.Published?.checkbox === true
      )
    })

    const metadata = databasePages.map((page: any) => ({
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
      coverImage: page.properties["Cover Image"]?.files?.[0]?.file?.url,
      publishedDate: page.properties["Published Date"]?.date?.start || "",
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    })) as BlogPostMetadata[]

    // Sort by published date
    return metadata.sort((a, b) => {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    })
  } catch (error) {
    console.error("Error fetching post metadata from Notion:", error)
    return []
  }
}
