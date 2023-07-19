
<script setup lang="ts">
import ContentInput from '../../components/course/ContentInput.vue';
import ContentModifyList from '../../components/course/ContentModifyList.vue';

</script>

<template>
    <div class="mt-20 md:mt-28 md:ml-64 mb-20">

        <div class="mt-10 ml-5 space-y-8">
            <h1 class="text-4xl font-bold">Edit Course Content</h1>
            <div>
                <label for="countries_disabled" class="block font-medium text-gray-900 dark:text-black text-2xl">Course
                    title:</label>
                <h1 class="text-4xl">Fundamental of Web Design</h1>
            </div>
            <!-- <ContentModifyList /> -->
        </div>

    </div>
    <RouterView/>
</template>