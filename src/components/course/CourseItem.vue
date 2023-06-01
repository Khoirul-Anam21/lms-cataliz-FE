<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const tesParam = ref('tetes')
const route = useRoute();
const courseDetail = ref('');
interface CourseDisplayFacil {
    thumbnail: string;
    title: string;
    category: string;
    studentCount: number
}

onMounted(() => {
    route.path.includes('participant') ? courseDetail.value = 'std-course-detail' : courseDetail.value = 'course-detail';
})

</script>

<template>
    <div class="">
        <router-link :to="{ name: courseDetail, params: { title: tesParam } }">
            <img class="rounded-t-lg" src="https://smartguy.com/webservice/storage/category/web-design.jpg" alt="" />
        </router-link>
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">tes</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">John Doe</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: Technology</p>
        </div>
    </div>
</template>