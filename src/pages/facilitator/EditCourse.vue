
<script setup lang="ts">
import { useCourseStore } from '../../stores/courses';
import CourseInput from '../../components/course/CourseInput.vue';
import { useCategoryStore } from '../../stores/category';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const courseStore = useCourseStore();
const categoryStore = useCategoryStore();
const route = useRoute();

const loading = ref(true);

const parsedIdFromRoute = computed(() => {
    const separatorIndex = route.path.indexOf('-');
    console.log(separatorIndex);
    const result = route.path.slice(separatorIndex + 1, separatorIndex + 25);
    return result;
});

onMounted(async () => {
    try {
        if (!courseStore.$state.currentCourse){
            await courseStore.getCourseById(parsedIdFromRoute.value);
        }
        await categoryStore.getCategories();
        console.log(categoryStore.$state.categories);
    } catch (error) {
        console.log(error);
    }
})
</script>
<template>
    <div class="mt-20 md:mt-28 md:ml-64 mb-20">
        <div class="mt-10 ml-5">
            <h1 class="text-4xl font-bold">Edit Course</h1>
            <CourseInput />
            <div class="flex justify-between w-11/12 mt-10">
                <button class="anti-btn">Delete Course</button>
                <button class="primary-btn">Save</button>
            </div>
        </div>
    </div>
    <RouterView />
</template>