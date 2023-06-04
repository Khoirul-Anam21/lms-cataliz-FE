<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { Comment } from './props.js'

const props = defineProps({
    comment: {
        type: Object as () => Comment,
        required: true
    }
});
const commentData = reactive(props.comment);


const baseInputModels: string[] = new Array(commentData.replies.length).fill('')

const inputModels = reactive(baseInputModels);
const showReplyForm = ref(false);
const replyText = ref('');

const toggleCommentForm = () => {
    showReplyForm.value = !showReplyForm.value;
};

const toggleReplyForm = (id: number) => {
    const index = commentData.replies.findIndex(reply => reply.id === id);
    const oldVal = commentData.replies[index].openInput;
    console.log(oldVal);
    commentData.replies[index].openInput = !oldVal;
}

const submitReply = () => {
    const newReply = { id: Date.now(), text: replyText.value, openInput: false };
    commentData.replies.push(newReply);
    replyText.value = '';
    showReplyForm.value = false;
};


</script>

<template>
    <div class="">
        <!-- main comment -->
        <div class="flex flex-col items-start">
            <div class="flex items-center mb-1">
                <div class="w-8 h-8 rounded-full bg-slate-500"></div>
                <section class="ml-2 -space-y-1">
                    <h3 class="font-bold">You <span class="font-normal">(student)</span></h3>
                    <p class="text-sm text-slate-600">February 44</p>
                </section>
            </div>
            <p class=""> comment {{ comment.text }} </p>
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
        <div v-for="(reply, index) in commentData.replies" :key="reply.id" class="reply flex flex-col mt-4 ml-10">
            <div class="flex flex-col items-start">
                <!-- profile identity -->
                <div class="flex items-center mb-1">
                    <div class="w-8 h-8 rounded-full bg-slate-500"></div>
                    <section class="ml-2 -space-y-1">
                        <h3 class="font-bold">Si Fulan</h3>
                        <p class="text-sm text-slate-600">February 44</p>
                    </section>
                </div>

                <!-- comment content -->
                <p class="text-sm">{{ reply.text }}</p>
                <button class="text-xs text-gray-500" @click="toggleReplyForm(reply.id)">Reply</button>
            </div>

            <!-- reply input -->
            <div v-if="reply.openInput" class="reply-form mt-2">
                <textarea
                    class="reply-textarea w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                    v-model="inputModels[index]" placeholder="Write a reply"></textarea>
                <button
                    class="reply-submit-button mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    @click="submitReply">Submit</button>
            </div>
        </div>
    </div>
</template>
  

  