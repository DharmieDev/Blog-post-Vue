<script setup lang="ts">
import { Menu } from '@boxicons/vue'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div class="h-14 md:flex md:flex-col bg-[#222831] md:min-h-lvh items-center md:items-start">
    <h2 class="hidden md:block text-center mt-5! text-[23px] font-bold">Blog Post App</h2>
    <nav>
        <!-- Mobile Menu -->
      <div class="flex gap-2">
        <Menu class="flex md:hidden w-6 h-6" @click="open = !open" />
        <RouterLink to="/" class="md:hidden" v-if="open">Home</RouterLink>
      </div>
      <RouterLink to="/" class="hidden md:flex hover:bg-gray-500 hover:rounded-md hover:w-50">Home</RouterLink>
    </nav>
  </div>
</template>
