<script setup lang="ts">
import BaseLogoWhite from './BaseLogoWhite.vue';

</script>

<template>
    <div class="fixed flex items-center justify-center z-10 w-full h-full bg-gray-800 top-0 right-0 opacity-70">
        <!-- <div class="relative h-8 w-8 top-1/2 left-1/2 bg-red-400"></div> -->
        <BaseLogoWhite class="animate"/>
    </div>
</template>

<style scoped>

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate {
  animation: spin 1.5s linear infinite;
}

</style>