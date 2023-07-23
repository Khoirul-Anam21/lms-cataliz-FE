<script setup lang="ts">
import { computed, watch } from 'vue';
import VueMarkdown from 'vue-markdown-render';

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
  <!-- <VueMarkdown :source="htmlContent"/> -->
  <div v-html="htmlContent"></div>
</template>

<style scoped>

div {
  width: 100%;
}

:deep(h1) {
  font-size: 2rem;
  font-weight: bold;
}

:deep(h2) {
  font-size: 1.5rem;
  font-weight: bold;
}

:deep(h3) {
  font-size: 1.25rem;
  font-weight: bold;

}

/* Lists */
:deep(ul),
:deep(ol) {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

:deep(ul li::before) {
  content: '\2022';
  margin-right: 0.5rem;
}

:deep(ul li) {
  counter-increment: step-counter;
}

:deep(ol li) {
  counter-increment: step-counter;
}

:deep(ol li::before) {
  content: counter(step-counter) '.';
  margin-right: 0.5rem;
}

/* Other styles */
:deep(p) {
}

:deep(strong) {
  font-weight: bold;
}

:deep(em) {
  font-style: italic;
}

:deep(pre) {
  background-color: #2C3333;
  padding: 16px;
}

:deep(code) {
  color: cadetblue
}

</style>
