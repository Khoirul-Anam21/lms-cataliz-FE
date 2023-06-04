<script setup lang="ts">
</script>

<template>

<div class="mt-2 mb-4 flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-gray hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-black/10 dark:active:bg-gray">
  <a
       
      data-te-sidenav-link-ref>
       
        <router-link :to="{name: 'assignment-detail', params: { id: 'tugas-bg' }}">
        <span>
          <p class="text-xl font-bold">Assignment 1 : Create simple Website</p>
          <p class="text-lg space-x-3">
            <span>Posted: 15/3/2023</span>
          </p>
        </span>
        </router-link>
    </a>
</div>

</template>