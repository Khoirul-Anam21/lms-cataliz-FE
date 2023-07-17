<script setup lang="ts">

import { useUserStore } from '../stores/user';
import { useAuthStore } from '../stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { TypesEnum, useBaseNotification } from '../composable/notification';

const authStore = useAuthStore();
const userStore = useUserStore();
const router = useRouter();
const { notification } = useBaseNotification();


const formData = ref({
    name: '',
    email: '',
    password: '',
})

const placeholderMap = {
    0: 'Name',
    1: 'Email',
    2: 'Password',
    3: 'Confirm Password'
}

const currentFocus = ref("");

const changeFocus = (field: string) => {
    currentFocus.value = field;
}

const onSubmit = async () => {
    authStore.$state.isLoading = true;
    try {
        const response = await authStore.signup(formData.value.name, formData.value.email, formData.value.password);
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
        notification('Failed', 'Failed to signup', { type: TypesEnum.Danger });
    }
};

const handleReset = () => {
    formData.value = {
        name: '',
        email: '',
        password: '',
    };
};


</script>

<template>
    <form class="flex flex-col px-8 py-8 bg-white items-center space-y-8" @submit.prevent="onSubmit()">
        <h2 class="text-2xl font-bold">Sign Up</h2>
        <div class="flex flex-col space-y-4">
            <div class="flex flex-col">
                <span v-show="currentFocus === placeholderMap[0]" class="text-slate-400 text-sm">Name</span>
                <input v-model="formData.name" @focus="changeFocus(placeholderMap[0])" type="text"
                    :placeholder="placeholderMap[0]" class="auth-input-sm" @focusout="() => currentFocus = ''">
            </div>
            <div class="flex flex-col">
                <span v-show="currentFocus === placeholderMap[1]" class="text-slate-400 text-sm">Email</span>
                <input v-model="formData.email" @focus="changeFocus(placeholderMap[1])" type="email"
                    :placeholder="placeholderMap[1]" class="auth-input-sm" @focusout="() => currentFocus = ''">
            </div>
            <div class="flex flex-col">
                <span v-show="currentFocus === placeholderMap[2]" class="text-slate-400 text-sm">Password</span>
                <input v-model="formData.password" @focus="changeFocus(placeholderMap[2])" type="password"
                    :placeholder="placeholderMap[2]" class="auth-input-sm" @focusout="() => currentFocus = ''">
            </div>
        </div>
        <div class="w-full flex flex-col space-y-4 px-8">
            <input type="submit" class="main-btn-wide rounded-md" value="Sign Up">
            <p>Have an account? <router-link to="/login" class="text-blue-400 cursor-pointer">Log In</router-link></p>
        </div>
    </form>
</template>