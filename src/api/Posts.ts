import type { ApiResponse, FetchParams, FetchPostsRes, Post } from "@/types/postsTypes";
import { api } from "./axios";


export const fetchPosts = async ({
  search = "",
  status,
  category,
  limit = 10,
  page = 1,
  all = false,
  sort,
}: FetchParams): Promise<FetchPostsRes> => {
  const params:Record<string, unknown> = {
    limit,
    page,
    sort,
  }

  const response = await api.get<ApiResponse<Post[]>>("/posts", { params })
  const res = response.data

  return {
    posts: res.data || [],
    meta: {
      total: res.meta?.total || 0,
      page: res.meta?.page || 1,
      limit: res.meta?.limit || limit,
    }
  }
  
}

export const fetchPost = async (id: string): Promise<Post> => {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}
