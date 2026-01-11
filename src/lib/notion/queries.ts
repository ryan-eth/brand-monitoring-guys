import { notion, n2m } from "./client"
import type { BlogPost, BlogPostMetadata } from "./types"

const DATABASE_ID = process.env.NOTION_DATABASE_ID || ""

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!DATABASE_ID) {
    console.warn("NOTION_DATABASE_ID is not set")
    return []
  }

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Published Date",
          direction: "descending",
        },
      ],
    })

    const posts = await Promise.all(
      response.results.map(async (page: any) => {
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

    return posts
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
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      return null
    }

    const page: any = response.results[0]
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
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Published Date",
          direction: "descending",
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      title: page.properties.Title?.title?.[0]?.plain_text || "",
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
      coverImage: page.properties["Cover Image"]?.files?.[0]?.file?.url,
      publishedDate: page.properties["Published Date"]?.date?.start || "",
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    })) as BlogPostMetadata[]
  } catch (error) {
    console.error("Error fetching post metadata from Notion:", error)
    return []
  }
}
