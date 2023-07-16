<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import TheHtmlMarkdownArea from '../TheHtmlMarkdownArea.vue';

const materialTypeModel = ref('');
const markdownText = ref('');
const modalOpen = ref(false);


const toggleOpenModal = () => modalOpen.value = !modalOpen.value;

const htmlContent = computed(() => {
    const html = marked(markdownText.value, { mangle: false, headerIds: false });
    return DOMPurify.sanitize(html);
});

const textareaRef = ref(null);

watch(markdownText, () => {
   adjustTextareaHeight()
});

const computedHeight = computed(() => {
    if (textareaRef.value !== null) {
        const textarea: any = textareaRef.value;
        textarea.style.height = 'auto';
        return textarea ? `${textarea.scrollHeight}px` : 'auto';
    }
});


const adjustTextareaHeight = () => {
    const textarea: any = textareaRef.value;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
};

onMounted(() => {
    adjustTextareaHeight();
    materialTypeModel.value = 'video';
});

</script>
<template>
    <div class="">
        <div class="my-6">
            <label for="large-input" >Title</label>
            <input type="text" id="large-input"
                class="block w-11/12 p-4 mt-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your material title">
        </div>
    </div>

    <span >Type</span>
    <div class="flex space-x-3 mt-4">
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="bordered-radio-1" type="radio" value="video" v-model="materialTypeModel" name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-radio-1"
                class="w-36 py-4 ml-2 text-sm font-medium text-gray-900 dark:text-natural-900 p-3">Video</label>
        </div>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input checked id="bordered-radio-2" type="radio" value="reading" v-model="materialTypeModel"
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-radio-2"
                class="w-36 py-4 ml-2 text-sm font-medium text-gray-900 dark:text-natural-900 p-3">Reading</label>
        </div>
    </div>


    <section v-show="materialTypeModel === 'video'">
        <div class="relativew-11/12">
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black text-3xl">Duration</label>
            <input type="text" id="floating_filled"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
        </div>

        <div class="w-11/12">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-3xl mt-5" for="large_size">Add a
                Material</label>
            <input
                class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="large_size" type="file">


            <div class="flex items-center justify-center w-11/12 mt-10">
                <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                            </path>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                                upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>
        </div>

    </section>

    <section v-show="materialTypeModel === 'reading'" class="mt-4">
        <div>
            <div class="flex flex-row justify-between">
                <label for="reading-material" class="mb-4 mt-5">Input
                    Material <span class="text-slate-400 italic">*Use markdown format</span></label>
                <button @click="toggleOpenModal" class="text-slate-700">Show preview</button>
            </div>
            <textarea ref="textareaRef" placeholder="Enter your reading material here" id="reading-material" @input="adjustTextareaHeight" @focusin="adjustTextareaHeight" v-model="markdownText"
                class="border p-4 w-full resize-none overflow-hidden" :style="{ height: computedHeight }"></textarea>
        </div>

        <!-- modal popup preview -->
        <div v-show="modalOpen"
            class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-50 bg-black">
            <div
                class="mt-20 md:mt-20 relative bg-white p-8 w-[360px] h-[480px] md:w-[1000px] md:h-[600px] whitespace-pre-wrap break-words overflow-auto">
                <button @click="toggleOpenModal" class="absolute top-4 right-4 text-red-500">Close preview</button>
                <the-html-markdown-area :content="htmlContent" class="mt-4" />
            </div>
        </div>
    </section>

    <router-link :to="{ name: 'course-publish' }">
        <button type="button"
            class="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 ">Save</button>
    </router-link>
</template>

