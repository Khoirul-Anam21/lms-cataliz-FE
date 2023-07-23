<script setup lang="ts">
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { computed } from 'vue';
import TheHtmlMarkdownArea from '../TheHtmlMarkdownArea.vue';

const props = defineProps<{
    content: String;
}>();

const htmlContent = computed(() => {
    const html = marked(props.content as string, { mangle: false, headerIds: false,});
    return DOMPurify.sanitize(html);
});

</script>


<template>
    <div class="flex items-start justify-between ml-5 mt-9 w-11/12 whitespace-pre-wrap break-words ">
        <TheHtmlMarkdownArea :content="htmlContent"/>
</div>
</template>