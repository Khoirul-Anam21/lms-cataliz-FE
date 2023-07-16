
<script setup lang="ts">
import ChatItem from '../../components/chat/ChatListItem.vue';

</script>

<template>
    <div class="mt-20 md:mt-28 md:ml-64 mr-4 md:mr-8">
        <div class="ml-5">
            <h1 class="text-2xl md:text-4xl font-bold mb-4">Chats</h1>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
        </div>
    </div>
    <RouterView />
</template>