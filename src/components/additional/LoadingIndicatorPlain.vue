<script setup lang="ts">
import BaseLogoWhite from './BaseLogoWhite.vue';
import BaseLogo from './BaseLogo.vue';

const props = defineProps({
  mode: {
    type: String,
    required: true
  }
})

</script>

<template>
  <!-- <div class="relative h-8 w-8 top-1/2 left-1/2 bg-red-400"></div> -->
  <BaseLogoWhite class="animate" v-if="props.mode === 'white'"/>
  <BaseLogo class="animate" v-else/>
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