<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BaseNotification  from './components/additional/BaseNotification.vue'


const router = useRouter()


</script>


<template>
    <RouterView />
    <component :is="BaseNotification" />
</template>

