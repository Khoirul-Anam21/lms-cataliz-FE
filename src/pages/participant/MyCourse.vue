<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CourseItem from '../../components/course/CourseItem.vue';
import { useCourseStore } from '../../stores/courses';

const dropdownOpen = ref(false);
const courseStore = useCourseStore();

const toggleOpenDropdown = ()=> dropdownOpen.value = !dropdownOpen.value;

onMounted(async ()=> {
    if (!courseStore.$state.participantCourses) {
        await courseStore.getParticipantCourses();
    }
    console.log(courseStore.$state.participantCourses);
});

</script>

<template>
    <div class="mt-20 md:ml-64">
        <div
        class="flex items-center justify-between mt-10 ml-5 font-medium border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-11/12 p-6 pl-6 space-x-7 space-x-reverse">
        <span class="responsive-text">My Courses</span>
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
        </div>
    </div>

    <!-- Card -->
    <div class="p-4 md:ml-64 md:p-2 grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="(item, index) in courseStore.$state.participantCourses" :key="item._id">
            <CourseItem :course="item"/>
        </div>
    </div>

    <RouterView />
</template>