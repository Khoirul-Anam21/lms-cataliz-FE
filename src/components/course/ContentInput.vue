<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import TheHtmlMarkdownArea from '../TheHtmlMarkdownArea.vue';
import { useRouter } from 'vue-router';
import { CourseContentDisplayProps } from '@/stores/courses';
import BaseFileUpload from '../base/BaseFileUpload.vue';
import { useCourseStore } from '../../stores/courses'
import { TypesEnum, useBaseNotification } from '../../composable/notification';
import LoadingIndicator from '../additional/LoadingIndicator.vue';

const materialTypeModel = ref('');
const markdownText = ref('');
const modalOpen = ref(false);
const router = useRouter();
const courseStore = useCourseStore();
const { notification } = useBaseNotification();
const loading = ref(false);
const props = defineProps<{
    content?: CourseContentDisplayProps
}>();
const formData = ref({
    title: '',
    description: '',
    material: '',
    reading: ''
})

const toggleOpenModal = () => modalOpen.value = !modalOpen.value;

const htmlContent = computed(() => {
    const html = marked(markdownText.value, { mangle: false, headerIds: false });
    return DOMPurify.sanitize(html);
});

const textareaRef = ref(null);

watch(markdownText, (newValue, old) => {
    formData.value.reading = newValue;
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

const goPublishPage = async () => {
    try {
        loading.value = true;
        if(materialTypeModel.value === 'video') formData.value.reading = ''
        if(materialTypeModel.value === 'reading') formData.value.material = ''
        console.log(formData);
        const form = new FormData();
        const courseId = localStorage.getItem('courseId') as string;
        form.append('course_id', courseId);
        form.append('title', formData.value.title);
        form.append('description', formData.value.description);
        form.append('material', formData.value.material);
        form.append('reading', formData.value.reading ?? markdownText);
        await courseStore.createCourseContent(form);
        loading.value = false;
        notification('Success', 'create new course content', { type: TypesEnum.Success });
        router.push({ name: 'course-publish' })
    } catch (error) {
        notification('Failed', 'Failed to create new course', { type: TypesEnum.Danger });
        console.log(error);
    }
}

onMounted(() => {
    adjustTextareaHeight();
    materialTypeModel.value = 'video';
});

</script>
<template>
    <LoadingIndicator v-show="loading"/>
    <form @submit.prevent="goPublishPage">
        <div class="">
            <section class="my-6">
                <label for="large-input">Title</label>
                <input type="text" id="large-input" v-model="formData.title"
                    class="block w-11/12 p-4 mt-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your material title" required>
            </section>
            <section class="my-6">
                <label for="large-input">Description</label>
                <input type="text" id="large-input" v-model="formData.description"
                    class="block w-11/12 p-4 mt-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your material title" required>
            </section>
        </div>

        <span>Type</span>
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

            <div class="w-11/12">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black mt-5" for="large_size">Add a
                    Material</label>


                <div class="flex items-center justify-center w-11/12 ">
                    <div class="w-full">
                        <BaseFileUpload @model:add-thumbnail="file => formData.material = file" />
                    </div>
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
                <textarea ref="textareaRef" placeholder="Enter your reading material here" id="reading-material"
                    @input="adjustTextareaHeight" @focusin="adjustTextareaHeight" v-model="markdownText"
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

        <input type="submit"
            class="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 ">
    </form>
</template>

