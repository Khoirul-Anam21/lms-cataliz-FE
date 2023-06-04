<script setup lang="ts">
import { reactive } from 'vue';
import { Comment } from './props';
import ChatCommentItem from './ChatCommentItem.vue';

const props = defineProps({
    comments: {
        type: Object as ()=> Comment[],
        required: true
    }
})

const comments = reactive(props.comments);
</script>

<template>  
    <div class="m-5 space-y-2">
        <h2 class="text-xl font-bold">Public Chat</h2>
        <ChatCommentItem v-for="(item, index) in comments" :key="item.text" :comment="item"/>
    </div>
</template>