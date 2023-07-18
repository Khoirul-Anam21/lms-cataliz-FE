<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { Comment } from './props.js'
import { CommentInterface } from '../../stores/comment';
import { useUserStore } from '../../stores/user';
import useDateFormatter from '../../composable/dateFormatter';

const props = defineProps<{
    comment: CommentInterface
}>();
const commentData = reactive(props.comment);
const userStore = useUserStore();

const baseInputModels: string[] = new Array(commentData.replies.length).fill('')

const inputModels = reactive(baseInputModels);
const showReplyForm = ref(false);
const replyText = ref('');

const toggleCommentForm = () => {
    showReplyForm.value = !showReplyForm.value;
};

const toggleReplyForm = (id: number) => {
    // const index = commentData.replies.findIndex(reply => reply.id === id);
    // const oldVal = commentData.replies[index].openInput;
    // console.log(oldVal);
    // commentData.replies[index].openInput = !oldVal;
}

const submitReply = () => {
    // const newReply = { id: Date.now(), text: replyText.value, openInput: false };
    // commentData.replies.push(newReply);
    // replyText.value = '';
    // showReplyForm.value = false;
};


</script>

<template>
    <div class="">
        <!-- main comment -->
        <div class="flex flex-col items-start">
            <div class="flex items-center mb-1">
                <img v-if="comment.user.photo" :src="comment.user.photo" alt="" class="w-8 h-8 rounded-full">
                <div v-else class="w-8 h-8 rounded-full bg-slate-500"></div>
                <section class="ml-2 -space-y-1">
                    <h3 v-if="comment.user._id === userStore.$state.user.id" class="font-bold">{{ comment.user.username }}
                        (You)</h3>
                    <h3 v-else class="font-bold">{{ comment.user.username }} </h3>
                    <p class="text-sm text-slate-600">{{ useDateFormatter(comment.createdAt).formattedDate.value }} - {{
                        useDateFormatter(comment.createdAt).formattedTime.value }}</p>
                </section>
            </div>
            <p class="">{{ comment.comment }} </p>
            <button class="text-xs text-gray-500" @click="toggleCommentForm">Reply</button>
        </div>
        <!-- reply main comment input -->
        <div v-if="showReplyForm" class="reply-form mt-2">
            <textarea
                class="reply-textarea w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                v-model="replyText" placeholder="Write a reply"></textarea>
            <button
                class="reply-submit-button mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                @click="submitReply">Submit</button>
        </div>

        <!-- replies -->
        <div v-for="(reply, index) in commentData.replies" :key="reply._id" class="reply flex flex-col mt-4 ml-10">
            <div class="flex flex-col items-start">
                <!-- profile identity -->
                <div class="flex items-center mb-1">
                    <img v-if="reply.user.photo" :src="reply.user.photo" alt="" class="w-8 h-8 rounded-full">
                    <div v-else class="w-8 h-8 rounded-full bg-slate-500"></div>
                    <section class="ml-2 -space-y-1">
                        <h3 v-if="reply.user._id === userStore.$state.user.id" class="font-bold">{{ reply.user.username }}
                            (You)</h3>
                        <h3 v-else class="font-bold">{{ reply.user.username }} </h3>
                        <p class="text-sm text-slate-600">{{ useDateFormatter(reply.createdAt).formattedDate.value }} - {{
                            useDateFormatter(reply.createdAt).formattedTime.value }}</p>
                    </section>
                </div>

                <!-- comment content -->
                <p class="text-sm">{{ reply.comment }}</p>
                <button class="text-xs text-gray-500" @click="">Reply</button>
            </div>

            <!-- reply input -->
            <!-- <div v-if="reply.openInput" class="reply-form mt-2">
                <textarea
                    class="reply-textarea w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                    v-model="inputModels[index]" placeholder="Write a reply"></textarea>
                <button
                    class="reply-submit-button mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    @click="submitReply">Submit</button>
            </div> -->
        </div>
    </div>
</template>
  

  