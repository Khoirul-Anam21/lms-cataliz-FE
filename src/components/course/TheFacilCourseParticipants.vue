<script setup lang="ts">
import { emit } from 'process';
import { useCourseStore } from '../../stores/courses';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const loading = ref(false);
const courseStore = useCourseStore();
const route = useRoute()

const isFacil = computed(() => route.path.includes('facil'));


defineEmits(['closeModal'])

const props = defineProps<{
  courseId: string;
}>();

onMounted(async () => {
  try {
    loading.value = true;
    if (isFacil.value) {
      await courseStore.getCourseParticipantsInFacil(props.courseId);
    }
  } catch (error) {
    console.log(error);
  }
})


</script>

<template>
  <div class="block absolute w-full">
    <div class="fixed w-full md:w-[768px] p-4 flex items-start justify-between bg-slate-100 pt-5">
      <h5 class="text-xl font-bold text-slate-800">Participant List</h5>
      <i @click="$emit('closeModal')" class="fa-solid fa-xmark fa-lg text-red-500 cursor-pointer"></i>
    </div>

    <div class="p-5 w-full">
      <ul class="mt-14">
        <li v-for="(item, index) in courseStore.$state.courseParticipants" :key="index" class="mb-2 px-3 py-4 w-full bg-slate-100 border rounded-2xl">
          <div class="flex items-center space-x-4">
            <div class="">
              <img class="w-10 h-10 rounded-full"
               :src="(item.photo as string)"
                alt="profile">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                {{ item.username }}
              </p>
            </div>
          </div>
        </li>
      </ul>

    </div>

  </div>
  <RouterView />
</template>