
<script setup lang="ts">
import CourseInput from '../../components/course/CourseInput.vue';


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
    <RouterView/>
</template>