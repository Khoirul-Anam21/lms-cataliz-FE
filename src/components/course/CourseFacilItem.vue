<script setup lang="ts">
import { ref } from 'vue';


const tesParam = ref('tetes')

interface CourseDisplayFacil {
    thumbnail: string;
    title: string;
    category: string;
    studentCount: number
}

</script>

<template>
    <div>
        <router-link :to="{ name: 'course-detail', params: { title: tesParam } }">
            <img class="rounded-t-lg" src="https://smartguy.com/webservice/storage/category/web-design.jpg" alt="" />
        </router-link>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">tes</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">30 Participant</p>
        </div>
    </div>
</template>