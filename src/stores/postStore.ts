import { fetchPost, fetchPosts } from "@/api/Posts";
import { type FetchParams, type Post } from "@/types/postsTypes";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";


export const usePostStore = defineStore("post", () => {
  const posts = ref<Post[]>([])
  const post = ref<Post | null>(null)
  const loading = ref(false)
  const total= ref(0)
  const error = ref<string | null>(null)

  const filter = reactive<FetchParams>({
    page: 1,
    limit: 10,
    status: "ALL",
    search: "",
    category: "",
    all: false,
    sort: "DESC",
  })

  const loadPosts = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetchPosts(filter)
      posts.value = response.posts
      total.value = response.meta.total
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } 
    } finally {
      loading.value = false
    }
  }

  const loadPost = async (id: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await fetchPost(id)
      post.value = response
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      loading.value = false
    }
  }

  return {
    posts,
    post,
    loading,
    total,
    error,
    filter,
    loadPosts,
    loadPost,
  }
})