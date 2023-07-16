<script setup lang="ts">
import { computed, watch } from 'vue';
import Prism from 'prismjs';

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})


const htmlContent = computed(() => props.content);

watch(htmlContent, (newV: string) => console.log(newV));


</script>

<template>
  <div v-html="htmlContent"></div>
</template>

<style scoped>

:deep(h1) {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: -1.5rem;
}

:deep(h2) {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: -1.5rem;
}

:deep(h3) {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: -1.5rem;

}

/* Lists */
:deep(ul),
:deep(ol) {
  margin: 0px;
  padding: 0px;
  list-style: none;
  margin-bottom: -1.  5rem;
  margin-top: -1rem;
}

:deep(ul li::before) {
  content: '\2022';
  margin-right: 0.5rem;
}

:deep(ul li) {
  counter-increment: step-counter;
  margin-bottom: -1.5rem;
}

:deep(ol li) {
  counter-increment: step-counter;
  margin-bottom: -1.5rem;
}

:deep(ol li::before) {
  content: counter(step-counter) '.';
  margin-right: 0.5rem;
}

/* Other styles */
:deep(p) {
  margin-bottom: -1.8rem;
}

:deep(strong) {
  font-weight: bold;
  margin-bottom: -1.8rem;
}

:deep(em) {
  font-style: italic;
  margin-bottom: -1.8rem;
}

:deep(pre) {
  background-color: #2C3333;
  padding: 16px;
  margin-bottom: -1.5rem;
}

:deep(code) {
  color: cadetblue
}

</style>
