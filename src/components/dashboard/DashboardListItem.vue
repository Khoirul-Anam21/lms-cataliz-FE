<script setup lang="ts">
</script>

<template>
    <button @click="() => console.log('clicked')" class="flex flex-row p-2 border rounded-lg justify-start items-center mb-1 w-full" >
        <i class="fa-solid fa-book fa-lg p-2"></i>
        <div class="-space-y-1 flex flex-col">
            <h6 class="text-base font-bold">Fundamental of web design</h6>
            <router-link :to="{ name: 'facil-courses' }" class="text-xs w-fit">View course</router-link>
        </div>
    </button>
</template>