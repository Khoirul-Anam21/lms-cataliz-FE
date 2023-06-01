
<script setup lang="ts">
import BaseFileUpload from '../base/BaseFileUpload.vue';


</script>

<template>
    <div class="p-4 space-y-4">
        <div>
            <h2 class="text-black text-2xl pb-2">Instruction</h2>
            <p>Exercitation do id culpa quis ad deserunt Lorem laborum. Magna est proident id quis duis. Dolore pariatur
                esse voluptate qui eu nisi commodo. Veniam in labore do fugiat et exercitation est cupidatat. Reprehenderit
                incididunt anim ad et nulla irure incididunt in aliqua. Ullamco excepteur ullamco ut dolor anim
                reprehenderit adipisicing laborum exercitation.</p>
            <br>
            <p>Ipsum consectetur cillum aliqua nulla aliquip deserunt aliquip tempor aliquip dolore ipsum sit labore cillum.
                Enim ut proident sunt do labore. Ad quis ut laborum id cillum id duis commodo aliqua et. In qui ullamco
                cillum cillum fugiat eiusmod commodo reprehenderit occaecat ea velit.</p>
    </div>
    <div>
        <div class="flex justify-between">
            <h2 class="text-black text-2xl pb-2">Submit your assignment</h2>
            <input type="submit" value="Submit" class="px-4 py-2 bg-slate-400 mb-1 rounded-lg text-white">
        </div>
        <BaseFileUpload />
    </div>
    <div>
        <h2 class="text-black text-2xl pb-2">Submission</h2>
        <!-- kasi v-if -->
        <p>No submission yet</p>
    </div>
</div></template>