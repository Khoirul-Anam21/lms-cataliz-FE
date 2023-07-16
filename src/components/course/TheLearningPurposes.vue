<script setup lang="ts">
const props = defineProps({
    purposes: {
        type: Array<String>,
    }
})


</script>

<template>
<div>
    <h2 class="text-xl mt-5 font-bold">Learning Purposes</h2>
    <div class="text-xl mt-5 mb-5">
        <li v-for="(item, index) in props.purposes" :key="index">{{ item }}</li>
    </div>
</div>
</template>