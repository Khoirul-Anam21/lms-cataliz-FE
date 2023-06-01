<script setup lang="ts">
import { ref } from 'vue';
import CourseItem from '../../components/course/CourseItem.vue';

const indexer = ref("abcdefghijklmnopqrstuvxyz")
</script>

<template>
    <!-- wrapper -->
    <div class="px-2 md:px-14 pt-20 md:pt-28 space-y-6">
        <div>
            <h1 class="text-4xl pb-2">Welcome</h1>
            <p class="pb-2 border-b-2">Id est irure ullamco labore cupidatat deserunt. Dolore reprehenderit enim magna enim
                nulla sunt laboris id. Deserunt laboris incididunt qui qui ea ad. Anim adipisicing eiusmod nisi occaecat. Id
                commodo consectetur adipisicing laborum irure. Ipsum Lorem quis esse commodo.</p>
        </div>
        <div>
            <h2 class="text-2xl pb-1 border-b-2">Courses</h2>
            <div class="p-4 md:p-2 grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="(item, index) in indexer" :key="index">
                    <CourseItem />
                </div>
            </div>
        </div>
    </div>
</template>