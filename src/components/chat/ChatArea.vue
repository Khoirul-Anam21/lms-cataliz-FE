<script setup lang="ts">
import { onMounted, reactive, watch, watchEffect } from 'vue';
import { Comment } from './props';
import ChatCommentItem from './ChatCommentItem.vue';
import { useCommentStore } from '../../stores/comment';

const props = defineProps({
    courseId: {
        type: String,
        required: true
    }
})

const commentStore = useCommentStore();

onMounted(async () => {
    try {
    } catch (error) {
        console.log(error);
    }
});

watch(commentStore.$state, async(newVal, oldVal) => {
    if (newVal.visible === true) {
        await commentStore.getAllComments(props.courseId);
    }
})

</script>

<template>
    <div class="mx-5 mt-4 space-y-2">
        <h2 class="text-xl font-bold">Public Chat</h2>
        <span v-show="!commentStore.$state.comments">Loading chat...</span>

        <!-- <p>{{ commentStore.$state.comments }}</p> -->
        <ChatCommentItem v-for="(item, index) in commentStore.$state.comments" :key="item._id" :comment="item"/>
    </div>
</template>