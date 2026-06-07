<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
</script>

 
<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-6xl font-bold">404</h1>
    <h2 class="text-2xl font-bold">Not Found</h2>
    <p class="text-lg">The page you are looking for does not exist.</p>
    <button @click="router.push('/')" class="cursor-pointer bg-white text-black! p-2! rounded-xl mt-2.5!">
        Go home
    </button>
  </div>
</template>
