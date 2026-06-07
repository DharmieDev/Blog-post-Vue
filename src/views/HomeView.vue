<script setup lang="ts">
import { usePostStore } from '@/stores/postStore'
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = usePostStore()
const { posts } = storeToRefs(store)
const route = useRoute()

const DetailView = computed(() => route.path.includes('/posts/'))

onMounted(async () => {
  await store.loadPosts()
})
</script>

<template>
  <div class="block md:flex flex-col items-center">
    <h1 class="text-center text-3xl font-bold mb-11!">Blogposts</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-[20rem] md:w-280 m-auto! md:m-8!">
      <div v-for="(post, key) in posts" :key="key" class="">
        <RouterLink
          :to="`/posts/${post.id}`"
          class="flex flex-col  bg-[#313647] rounded-xl items-center justify-center"
        >
          <div class="flex flex-col w-[20rem] h-60 justify-around gap-10 p-2.5!">
            <h2 class="text-2xl font-bold">{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
