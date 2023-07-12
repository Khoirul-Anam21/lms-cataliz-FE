<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, watchEffect } from 'vue';

const activeTab = ref(0);
const tabs: any = ref([]);
const context: ComponentInternalInstance | null = getCurrentInstance();
const slots = context?.slots ?? {}

watchEffect(() => {
    tabs.value = Object.keys(slots).filter((name) => name !== 'default');
}); 

</script>

<template>
    <div class="flex flex-col">
        <!-- Tab Buttons -->
        <div class="flex space-x-2 flex-wrap border-b">
            <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{
                'tab-btn-focus': activeTab === index,
                'tab-btn': activeTab !== index
            }">
                {{ tab }}
            </button>
        </div>
        <!-- Tab Content -->
        <div>
            <slot :name="tabs[activeTab]"></slot>
        </div>
    </div>
</template>