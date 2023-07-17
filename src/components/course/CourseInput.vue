<script setup lang="ts">
import { useRoute } from 'vue-router';
import { CategoryInterface, useCategoryStore } from '../../stores/category';
import { CourseDisplayProps, useCourseStore } from '../../stores/courses';
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps<{
    course?: CourseDisplayProps,
    categories?: CategoryInterface[]
}>();

defineEmits()

const courseStore = useCourseStore();
const route = useRoute();
const categoryStore = useCategoryStore();

const formData = ref({
    title: '',
    description: '',
    learningPurpose: [''] as string[],
    thumbnail: '',
    category_id: '',
});

const purposeText = ref('');
const categoryText = ref('');
const isDropdownOpen = ref(false);

const addPurpose = (name: string) => {
    formData.value.learningPurpose.push(name);
    purposeText.value = '';
}

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const submit = () => {

}

const parsedIdFromRoute = computed(() => {
    const separatorIndex = route.path.indexOf('-');
    console.log(separatorIndex);
    const result = route.path.slice(separatorIndex + 1, separatorIndex + 25);
    return result;
});

const selectCategory = (categoryInput: CategoryInterface) => {
    const categories = categoryStore.$state.categories;
    const findCategory = categories?.filter((category) => category._id === categoryInput._id)[0];
    formData.value.category_id = findCategory?._id ?? '';
    categoryText.value = findCategory?.name ?? '';
}

// watch(categoryText, (newCategory, oldVal) => {
//     const categories = categoryStore.$state.categories;
//     const findCategory = categories?.filter((category) => category.name === newCategory)[0];
//     formData.value.category_id = findCategory?._id ?? '';
// });

onMounted(async () => {
    try {
        if (!courseStore.$state.currentCourse) {
            await courseStore.getCourseById(parsedIdFromRoute.value);
        }
        await categoryStore.getCategories();

        categoryText.value = courseStore.$state.currentCourse?.category as string;
        formData.value.title = courseStore.$state.currentCourse?.title as string;
        formData.value.description = courseStore.$state.currentCourse?.description as string;
        formData.value.learningPurpose = courseStore.$state.currentCourse?.purpose ?? [];
        formData.value.title = courseStore.$state.currentCourse?.title as string;
    } catch (error) {
        console.log(error);
    }
});

</script>

<template>
    <form @submit.prevent="">
        <section class="mb-6">
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Title</label>
            <input type="text" id="large-input" v-model="formData.title"
                class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your course title goes here....">
        </section>

        <section class="mb-6">
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Description</label>
            <input type="text" id="large-input" v-model="formData.description"
                class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </section>

        <section class="mb-6">
            <label for="large-input" class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Learning
                Purposes</label>
            <div class="w-11/12 flex flex-row">
                <input type="text" id="large-input" v-model="purposeText" placeholder="Add new purpose here"
                    class="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <button class="px-8 primary-btn" @click="addPurpose(purposeText)">Add</button>
            </div>
            <ul>
                <li v-for="(item, index) in formData.learningPurpose" :key="index"
                    class="p-4 bg-slate-200 w-11/12 my-1 flex items-center justify-between">
                    <span>{{ item }}</span>
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </li>
            </ul>
        </section>

        <section>
            <label for="countries_disabled"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black ">Category</label>
            <div class="w-fit">
                <div>
                    <input type="text" readonly :value="categoryText"
                        class="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <button @click="toggleDropdown" @focusout="toggleDropdown" class="p-4"><i class="fa-solid fa-chevron-down"></i></button>
                </div>
                <ul v-show="isDropdownOpen" class="">
                    <li v-for="option in categoryStore.$state.categories" :key="option._id" @click="selectCategory(option)" class="p-2 bg-slate-100 w-full cursor-pointer rounded">
                        {{ option.name }}</li>
                </ul>
            </div>
        </section>

        <section>
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Thumbnail</label>
            <div>
                <img :src="props.course?.thumbnail" alt="" class="md:w-5/12 md:h-[400px]">
                <input type="file">
            </div>
        </section>
        <div class="flex justify-between w-11/12 mt-10">
            <button class="anti-btn">Delete Course</button>
            <input type="submit" class="primary-btn" value="Save" @click="submit">
        </div>
    </form>
</template>