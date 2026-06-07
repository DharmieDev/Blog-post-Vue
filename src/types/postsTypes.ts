
export type Status = "DRAFT" | "PUBLISHED" | "ARCHIVED";
export interface Post {
  id: string,
  title: string,
  author: string,
  category: string,
  content: string,
  excerpt: string,
  status: Status
  tags: string[],
  viewCount: number,
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date,
  slug: string | null,
  featuredImage: string | null,
}

export interface FetchParams {
  search?: string,
  status: Status | "ALL",
  category?: string,
  limit?: number,
  page?: number,
  all?: boolean,
  sort?: "DESC" | "ASC",
}

export type FetchPostsRes ={
  posts: Post[],
  meta: {
    total: number,
    page: number,
    limit: number,
  },
}

export interface ApiResponse<P> {
  data: P,
  meta: {
    total: number,
    page: number,
    limit: number,
  }
}

export interface ApiErrorRes {
  message: string,
  error: Record<string, string[]>
}