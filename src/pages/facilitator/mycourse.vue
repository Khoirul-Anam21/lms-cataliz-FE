<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CourseFacilItem from '../../components/course/CourseFacilItem.vue';
import { useCourseStore } from '../../stores/courses';

const mockArr: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
const dropdownOpen = ref(false);
const courseStore = useCourseStore();
const loading = ref(true);

const toggleOpenDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

onMounted(async () => {
    try {
        loading.value = true;
        await courseStore.getFacilCourses();
    } catch (error) {
        console.log(error);
    }
});

</script>

<template>
    <div class="mt-20 md:ml-64">
        <div
            class="flex items-center justify-between mt-10 ml-5 font-medium border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-11/12 p-6 pl-6 space-x-7 space-x-reverse">
            <span class="responsive-text">My Course</span>
            <div class="relative">
                <button @click="toggleOpenDropdown" @focusout="() => dropdownOpen = false"
                    class="flex items-center justify-between px-4 py-2 text-sm font-medium text-black rounded-md focus:outline-none">
                    Category
                    <span
                        class="material-icons transition-transform duration-500 ease-in-out text-gray-300 ml-2">keyboard_arrow_down</span>
                </button>
                <div v-show="dropdownOpen" class="absolute right-0 mt-2 py-2 bg-white border rounded-md shadow-lg">
                    <!-- Dropdown content -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">coming soon</a>
                </div>
            </div>


            <div class="flex-row justify-between">
                <router-link :to="{ name: 'course-add' }">
                    <a href="#"
                        class="static inline-block text-sm px-4 py-2 leading-none rounded responsive-text text-black border-white hover:border-transparent hover:text-natural-900 bg-white mt-4 lg:mt-0">+
                        Add New Course</a>
                </router-link>

            </div>
        </div>

        <!-- Card -->
        <div class="p-4 md:p-2 grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div v-for="(item, index) in courseStore.$state.facilitatorCourses" :key="item._id">
                <CourseFacilItem :course="item"/>
            </div>
        </div>

    </div>
    <RouterView />
</template>