<script setup>
import { ref } from 'vue';

const props = defineProps({
    value: {
        type: Boolean,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
},);

const isActive = ref(props.value);

const emit = defineEmits(['update:value'])

const toggle = () => {
    if (!props.disabled) {
        isActive.value = !isActive.value;
        emit('update:value', isActive.value);
    }
};
</script>

<template>
    <div class="flex items-center">
        <button :class="{
            'bg-green-500': isActive,
            'bg-gray-300': !isActive,
            'cursor-pointer': !disabled,
            'cursor-not-allowed': disabled
        }"
            class="relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full transition-colors ease-in-out duration-300 focus:outline-none"
            @click="toggle">
            <span :class="{
                'translate-x-6': isActive,
                'translate-x-0': !isActive
            }"
                class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-300"></span>
        </button>
    </div>
</template>