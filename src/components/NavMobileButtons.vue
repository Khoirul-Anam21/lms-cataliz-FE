<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const popupShow = ref(false);
const router = useRouter();

const goLogin = () => {
    router.push({ name: 'login' });
}

const goSignup = () => {
    router.push({ name: 'signup' })
}

</script>

<template>
    <div>
        <i class="fa-solid fa-bars" @click="()=> popupShow = !popupShow"></i>
        <div v-show="popupShow" class="fixed right-4 flex flex-col items-end text-sm rounded-lg p-2 bg-white shadow-xl">
            <button class="popupBtn" @click="goLogin">Login</button>
            <button class="popupBtn" @click="goSignup">Signup</button>
        </div>
    </div>
</template>

<style scoped>
.popupBtn {
    @apply px-4 py-1 hover:font-bold
}
</style>