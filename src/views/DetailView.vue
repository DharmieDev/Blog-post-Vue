<script setup lang="ts">
import { usePostStore } from '@/stores/postStore';
import { watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const postStore = usePostStore()
watch(() => route.params.id, async (id) => {
  if (typeof id !== "string") return
  await postStore.loadPost(id)
}, { immediate: true })
</script>

<template>
<div class="flex flex-col items-center m-8!">
  <h2 class="text-3xl font-bold mb-12.5!">{{postStore.post?.title}}</h2>
  <div class="w-75 md:w-200">
  <h4 class="text-2xl font-bold mb-5!">{{postStore.post?.excerpt}}</h4>
  <p class="text-[#7F8CAA]! mb-5!">{{postStore.post?.content}}</p>
  <span>{{postStore.post?.category}}</span><br></br>
  <span>{{postStore.post?.tags}}</span>
  </div>
</div>
</template>