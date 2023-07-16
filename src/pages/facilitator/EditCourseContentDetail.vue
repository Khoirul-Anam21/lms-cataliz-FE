
<script setup lang="ts">
import ContentInput from '../../components/course/ContentInput.vue';

</script>
<template>
    <div class="mt-20 md:mt-28 md:ml-64 mb-20">
        <div class="mt-10 ml-5 space-y-8">
            <h1 class="text-4xl font-bold">Edit Content</h1>
            <ContentInput/>
        </div>
    </div>
    <RouterView/>
</template>