<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter();

const goChatDetail = () => {
    router.push({ name: 'chat-detail', params: { id: 'param-chat-sek' } })
}

const goCourseDetail = (event: Event) => {
    event.stopPropagation()
    router.push({ name: 'facil-course-detail', params: { title: 'judul-course' } });
}

</script>

<template>
    <div @click="goChatDetail"
        class="flex justify-start items-center px-6 py-4 my-2 border space-x-4 text-slate-800 cursor-pointer hover:bg-slate-50">
        <i class="fa-sharp fa-solid fa-comment-dots fa-2xl"></i>
        <div>
            <h2 class="text-xl font-bold">Ini Title Sementara Boi</h2>
            <p @click="goCourseDetail" class="text-slate-500 hover:text-slate-800 w-fit">View course</p>
        </div>
    </div>
</template>