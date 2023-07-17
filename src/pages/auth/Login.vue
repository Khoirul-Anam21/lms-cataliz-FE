
<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
import TheLoginInput from '../../components/TheLoginInput.vue';
import LoadingIndicator from '../../components/additional/LoadingIndicator.vue';
import LogoDisplay from '../../components/additional/LogoDisplay.vue';

const authStore = useAuthStore();


</script>



<template>
    <div
        class="flex items-center justify-center w-full h-screen bg-slate-400 md:bg-slate-400 md:justify-center">
        <LoadingIndicator v-show="authStore.isLoading"/>
        <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center items-center md:bg-slate-600">
            <LogoDisplay class="md:w-[400px]"/>
            <!-- Login Card -->
            <TheLoginInput />
        </div>
    </div>
    <RouterView /></template>