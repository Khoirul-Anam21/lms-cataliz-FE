<script setup lang="ts">
import { useRouter } from 'vue-router';
import { TypesEnum, useBaseNotification } from '../../composable/notification';
import { CourseContentDisplayProps, useCourseStore } from '../../stores/courses';
import { onMounted } from 'vue';
// TODO:give a conditional rendering when edit mode or add mode

const courseStore = useCourseStore();

const props = defineProps<{
    contents?: CourseContentDisplayProps[],
    editMode?: boolean,
    courseId?: string
}>();
const router = useRouter();
const { notification } = useBaseNotification();
const emit = defineEmits(['deleteAndReload'])

const goEditMaterial = (id: string) => {
  router.push({ name: 'material-edit-detail', params: { id, title: courseStore.$state.currentCourse?.title } })
}

const deleteMaterial = async (contentId: string) => {
    try {
        emit("deleteAndReload", contentId);
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
   if (props.editMode) {
    localStorage.setItem("courseId", props.courseId as string);
   }
   await courseStore.getCourseById(localStorage.getItem("courseId") as string);
})

</script>

<template>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Material
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in props.contents" :key="index"
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ item.title }}
                </th>
                <td class="px-6 py-4">
                    {{ item.duration }}
                </td>
                <td class="px-6 py-4">
                    {{ item.type }}
                </td>
                <td class="px-6 py-4 space-x-3">
                    <i class="fa-solid fa-pen-to-square fa-lg text-yellow-500 cursor-pointer" @click="goEditMaterial(item._id)"></i>
                    <!-- <router-link :to="{ name: 'material-edit-detail', params: { id: item._id } }">

                    </router-link> -->
                    <i class="fa-solid fa-trash fa-lg text-red-500 cursor-pointer" @click="deleteMaterial(item._id)"></i>
                </td>
            </tr>

        </tbody>

    </table>
    <span class="w-11/12 item-center">
        <div class="grid  px-4 py-5 text-sm text-gray-700 border-b  gap-x-16 ">
            <div class="text-gray-500 dark:text-gray-400"></div>
            <div>
                <router-link :to="{ name: 'material-add' }">
                    <a href="#"
                        class="text-white block w-full bg-gray-600 hover:bg-white-700 focus:ring-4 focus:ring-white-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-white-900 ">Add
                        New Material</a>
                </router-link>
            </div>
        </div>
    </span>
</template>