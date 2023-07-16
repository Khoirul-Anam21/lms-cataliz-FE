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
    <div class="rounded-xl border overflow-auto shadow-md">
        <router-link :to="{ name: 'facil-course-detail', params: { title: tesParam } }">
            <img src="https://smartguy.com/webservice/storage/category/web-design.jpg" alt="" />
            <section class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">tes</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">30 Participant</p>
            </section>
        </router-link>
    </div>
</template>