<script setup lang="ts">

import { ref } from 'vue';

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

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

</script>

<template>
    <form class="flex flex-col px-8 py-8 bg-white items-center space-y-8">
        <h2 class="text-2xl font-bold">Sign Up</h2>
        <div class="flex flex-col space-y-4">
            <div class="flex flex-col">
                <span v-show="currentFocus === placeholderMap[0]" class="text-slate-400 text-sm">Name</span>
                <input v-model="name" @focus="changeFocus(placeholderMap[0])" type="text" :placeholder="placeholderMap[0]"
                    class="auth-input-sm" @focusout="() => currentFocus = ''">
            </div>
            <div class="flex flex-col">
                <span v-show="currentFocus === placeholderMap[1]" class="text-slate-400 text-sm">Email</span>
                <input v-model="email" @focus="changeFocus(placeholderMap[1])" type="email" :placeholder="placeholderMap[1]"
                    class="auth-input-sm" @focusout="() => currentFocus = ''">
            </div>
            <div class="flex flex-col">
                <span v-show="currentFocus === placeholderMap[2]" class="text-slate-400 text-sm">Password</span>
                <input v-model="password" @focus="changeFocus(placeholderMap[2])" type="password"
                    :placeholder="placeholderMap[2]" class="auth-input-sm" @focusout="() => currentFocus = ''">
            </div>
            <div class="flex flex-col">
                <span v-show="currentFocus === placeholderMap[3]" class="text-slate-400 text-sm">Confirm Password</span>
                <input v-model="confirmPassword" @focus="changeFocus(placeholderMap[3])" type="password"
                    :placeholder="placeholderMap[3]" class="auth-input-sm" @focusout="() => currentFocus = ''">
            </div>
        </div>
        <div class="w-full flex flex-col space-y-4 px-8">
            <input type="submit" class="main-btn-wide rounded-md" value="Sign Up">
            <p>Have an account? <router-link to="/login" class="text-blue-400 cursor-pointer">Log In</router-link></p>
        </div>
    </form>
</template>