<script setup lang="ts">
import SidebarView from './components/SidebarView.vue';

</script>

<template>
  <div class="block md:grid grid-cols-[200px_1fr] bg-[#212121] justify-center min-h-lvh w-full">
      <SidebarView />
      <RouterView/>
  </div>
</template>

<style scoped></style>
