<script setup lang="ts"></script>

<template>
  <notifications position="bottom right" :duration="3000">
    <template #body="props">
      <div
        class="flex items-center justify-center mx-4 my-1 p-4 rounded-xl shadow space-x-2"
        :class="{
          'bg-white text-slate-600': props.item.type === undefined,
          'bg-blue-50 text-blue-600': props.item.type === 'info',
          'bg-green-50 text-green-600  border border-green-400': props.item.type === 'success',
          'bg-yellow-50 text-yellow-600': props.item.type === 'warning',
          'bg-red-50 text-red-600': props.item.type === 'danger'
        }"
      >
      <i v-if="props.item.type === 'danger'" class="fa-solid fa-triangle-exclamation fa-2xl px-4"></i>
      <i v-else-if="props.item.type === 'info'" class="fa-solid fa-circle-info fa-2xl px-4"></i>
      <i v-else-if="props.item.type === 'success'" class="fa-solid fa-circle-check fa-2xl px-4"></i>
      <i v-else-if="props.item.type === 'warning'" class="fa-solid fa-triangle-exclamation fa-2xl px-4"></i>
      <i v-else class="fa-solid fa-bell fa-2xl px-4"></i>

        <div class="flex gap-2">
          <div class="flex flex-col py-2">
            <p class="font-bold">
              {{ props.item.title }}
            </p>
            <p>
              {{ props.item.text }}
            </p>
          </div>
        </div>
        <button type="button" class="p-2 hover:opacity-80" @click="props.close()">
          <i class="i-fas-xmark block"></i>
        </button>
      </div>
    </template>
  </notifications>
</template>