<script setup lang="ts">

</script>

<template>
    <form class="flex flex-col px-6 py-8 bg-white items-center space-y-10">
        <h2 class="text-2xl font-bold">Login</h2>
        <div class="flex flex-col space-y-2">
            <input type="text" placeholder="Email" class="auth-input">
            <input type="text" placeholder="Password" class="auth-input">
        </div>
        <div class="w-full flex flex-col space-y-4 px-8">
            <input type="submit" class="main-btn-wide rounded-md" value="Log In">
            <p>Don't have account? <router-link to="/signup" class="text-blue-400 cursor-pointer">Sign
                    Up</router-link></p>
        </div>
    </form>
</template>