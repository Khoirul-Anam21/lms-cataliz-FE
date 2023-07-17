<script setup lang="ts">
import { CategoryInterface } from '@/stores/category';
import { CourseDisplayProps } from '@/stores/courses';
import { ref } from 'vue';
const props = defineProps<{
    course: CourseDisplayProps,
    categories: CategoryInterface
}>();

const formData = ref({
    title: '',
    description: '',
    learningPurpose: '',
    category_id: '',
    
})

</script>

<template>
    <form>
        <div class="mb-6">
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Title</label>
            <input type="text" id="large-input"
                class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your course title goes here....">
        </div>

        <div class="mb-6">
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Description</label>
            <input type="text" id="large-input"
                class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <div class="mb-6">
            <label for="large-input" class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Learning
                Purpose</label>
            <input type="text" id="large-input"
                class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <label for="countries_disabled"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black ">Category</label>
        <select disabled id="countries_disabled"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose the category</option>
            <option value="US">Science Technology</option>
            <option value="CA">Machine Learning</option>
            <option value="FR">FrontEnd</option>
            <option value="DE">BackEnd</option>
        </select>
    </form>
</template>