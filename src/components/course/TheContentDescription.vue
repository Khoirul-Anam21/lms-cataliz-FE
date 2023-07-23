<script setup lang="ts">
const props = defineProps<{
    description: String
}>()

</script>

<template>
    <div class="flex items-start justify-between ml-5 mt-5 w-11/12">
        <p>{{ props.description }}</p>

</div>
</template>