
<script setup lang="ts">
import TheLoginInput from '../components/TheLoginInput.vue';

</script>



<template>
    <div
        class="flex items-center justify-center w-full h-screen bg-slate-400 md:bg-slate-400 md:justify-center">
        <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center items-center md:bg-slate-600">
            <h1 class="text-4xl font-bold md:p-6 text-white md:bg-slate-600">Ini Halaman Login</h1>

            <!-- Login Card -->
            <TheLoginInput />
        </div>
    </div>
    <RouterView /></template>