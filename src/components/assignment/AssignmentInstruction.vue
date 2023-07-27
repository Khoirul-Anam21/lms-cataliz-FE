<script setup lang="ts">
const props = defineProps<{
    instruction: string;
}>()

</script>

<template>
    <div class="inline-flex justify-between ml-5 mt-5 w-11/12">
        <span class="">{{ props.instruction }}</span>

        <!-- Dropdown menu -->

</div></template>