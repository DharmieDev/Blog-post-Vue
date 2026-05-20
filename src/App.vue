<script setup lang="ts">
import HomeView from './views/HomeView.vue';
import SidebarView from './views/SidebarView.vue';

</script>

<template>
  <div class="grid grid-cols-[200px_1fr] bg-[#212121] justify-center min-h-lvh w-full">
      <SidebarView />
      <HomeView />
  </div>
</template>

<style scoped></style>
