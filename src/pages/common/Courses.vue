<script setup lang="ts">
import { computed, ref } from 'vue';
import CourseItem from '../../components/course/CourseItem.vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../../stores/user';

const indexer = ref("abcdefghijklmnopqrstuvxyz");
const route = useRoute();
const userStore = useUserStore();

const isFacilOrParticipant = computed(() => route.path.includes('facil') || route.path.includes('participant'));
const userNameIfExist = computed(() => isFacilOrParticipant ? ", " + userStore.$state.user.username : null);
</script>

<template>
    <!-- wrapper -->
    <div class="px-2 md:px-14 pt-20 md:pt-28 space-y-6" :class="{ 'md:ml-64': isFacilOrParticipant }">
        <div>
            <h1 class="text-4xl pb-2">Welcome{{ userNameIfExist }}</h1>
            <p class="pb-2 border-b-2">Welcome to our Learning Management System (LMS)! As a participant in our platform,
                you'll have access to a diverse range of courses designed to enhance your knowledge, skills, and overall
                learning experience. Engage with our expertly crafted content, collaborate with fellow participants, and
                embark on an exciting educational adventure. We're here to support you every step of the way on your journey
                of growth and success. Happy learning!</p>
        </div>
        <div>
            <h2 class="text-2xl pb-1 border-b-2">Courses</h2>
            <div class="p-4 md:p-2 grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="(item, index) in indexer" :key="index">
                    <CourseItem />
                </div>
            </div>
    </div>
</div></template>