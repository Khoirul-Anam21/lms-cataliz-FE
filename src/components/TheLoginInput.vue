<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import { TypesEnum, useBaseNotification } from '../composable/notification';

const { notification } = useBaseNotification();
const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter();
const formData = ref({
    email: '',
    password: '',
})


const onSubmit = async () => {
    authStore.$state.isLoading = true;
    try {
        const responsePromise = authStore.login(formData.value.email, formData.value.password);
        const response = await responsePromise;
        console.log(response.data);
        const userResponse = await userStore.getUser(response.data.id);
        if (response && userResponse) authStore.$state.isLoading = false;

        if (userResponse.data.role === 'facilitator') {
            router.push({ name: 'facil-dashboard' })
        } else {
            router.push({ name: 'participant-dashboard' })
        }
    } catch (error) {
        authStore.$state.isLoading = false;
        notification('Failed to login', 'Invalid email and/or password', { type: TypesEnum.Danger });
    }
};

const handleReset = () => {
    formData.value = {
        email: '',
        password: '',
    };
};

</script>

<template>
    <form class="flex flex-col px-6 py-8 bg-white items-center space-y-10" @submit.prevent="onSubmit()">
        <h2 class="text-2xl font-bold">Login</h2>
        <div class="flex flex-col space-y-2">
            <input type="email" placeholder="Email" class="auth-input" v-model="formData.email">
            <input type="password" placeholder="Password" class="auth-input" v-model="formData.password">
        </div>
        <div class="w-full flex flex-col space-y-4 px-8">
            <input type="submit" class="main-btn-wide rounded-md" value="Log In">
            <p>Don't have account? <router-link to="/signup" class="text-blue-400 cursor-pointer">Sign
                    Up</router-link></p>
        </div>
    </form>
</template>