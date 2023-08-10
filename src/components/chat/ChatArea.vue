<script setup lang="ts">
import { onMounted, reactive, ref, watch, watchEffect } from 'vue';
import { Comment } from './props';
import ChatCommentItem from './ChatCommentItem.vue';
import { useCommentStore } from '../../stores/comment';
import { useBaseNotification } from '../../composable/notification';

const props = defineProps({
    courseId: {
        type: String,
        required: true
    }
})

const commentText = ref('');
const visibleForm = ref(false);
const loading = ref(false);

const { notification } = useBaseNotification();
const commentStore = useCommentStore();

const createComment = async () => {
    try {
        visibleForm.value = false;
        loading.value = true;
        await commentStore.createComment(props.courseId, commentText.value);
        await commentStore.getAllComments(props.courseId);
        commentText.value = '';
        loading.value = false;
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
    try {
        commentStore.$state.visible = false;
        await commentStore.getAllComments(props.courseId);
    } catch (error) {
        console.log(error);
    }
});


</script>

<template>
    <div class="mx-5 mt-4 space-y-2">
        <h2 class="text-xl font-bold mb-2">Public Chat</h2>
        <button @click="() => visibleForm = !visibleForm" v-show="!visibleForm" class="p-2 border rounded-lg text-slate-600"> <i class="fa-solid fa-pen mr-1"></i> Add Comment</button>
        <button @click="() => visibleForm = !visibleForm"  v-show="visibleForm" class="p-2 border rounded-lg text-slate-600">Hide</button>
        <form v-show="visibleForm" @submit.prevent="createComment" class="flex flex-col items-end">
            <textarea name="tes" id="" v-model="commentText"
                class="w-full px-3 py-2 rounded-md border  focus:outline-none focus:ring focus:border-blue-300"></textarea>
            <input type="submit" value="Send" class="rounded-md primary-btn">
        </form>
        <p v-show="loading" class="px-2">. . .</p>
        <p v-show="!commentStore.$state.comments">Loading chat...</p>
        <!-- <p>{{ commentStore.$state.comments }}</p> -->
        <div v-show="commentStore.$state.comments?.length === 0" class="w-full h-[200px] flex flex-col space-y-6 items-center justify-center">
            <i class="fa-regular fa-comment-dots fa-2xl opacity-30 scale-150"></i>
            <p class="opacity-30">No chat yet -_-</p>
        </div>
        <ChatCommentItem v-for="(item, index) in commentStore.$state.comments" :key="item._id" :comment="item" :course-id="$props.courseId" />
    </div>
</template>