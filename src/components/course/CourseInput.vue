<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { CategoryInterface, useCategoryStore } from '../../stores/category';
import { CourseDisplayProps, useCourseStore } from '../../stores/courses';
import { computed, onMounted, ref, watch } from 'vue';
import { TypesEnum, useBaseNotification } from '../../composable/notification';

const props = defineProps<{
    course?: CourseDisplayProps,
    categories?: CategoryInterface[]
}>();

const { notification } = useBaseNotification();
const courseStore = useCourseStore();
const route = useRoute();
const router = useRouter();
const categoryStore = useCategoryStore();


const formData = ref({
    title: '',
    description: '',
    learningPurpose: [] as string[],
    thumbnail: '',
    category_id: '',
});

const purposeText = ref('');
const categoryText = ref('');
const isDropdownOpen = ref(false);

const addPurpose = (name: string) => {
    formData.value.learningPurpose.push(name);
    purposeText.value = '';
}

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const submit = () => {

}

const submitAdd = async () => {
    try {
        const form = new FormData();
        form.append('title', formData.value.title);
        form.append('description', formData.value.description);
        formData.value.learningPurpose.forEach((purpose) => form.append('purpose', purpose));
        form.append('category_id', formData.value.category_id);
        form.append('thumbnail', formData.value.thumbnail);
        await courseStore.createCourse(form);
        notification('Success', 'Success to create new course', { type: TypesEnum.Success });
        router.push({ name: 'material-add' });
    } catch (error) {
        notification('Failed', 'Failed to create new course', { type: TypesEnum.Danger });
    }
}

const parsedIdFromRoute = computed(() => {
    const separatorIndex = route.path.indexOf('-');
    console.log(separatorIndex);
    const result = route.path.slice(separatorIndex + 1, separatorIndex + 25);
    return result;
});

const selectCategory = async (categoryInput: CategoryInterface) => {
    await categoryStore.getCategories();
    console.log(categoryStore.$state.categories);
    const categories = categoryStore.$state.categories;
    const findCategory = categories?.filter((category) => category._id === categoryInput._id)[0];
    formData.value.category_id = findCategory?._id ?? '';
    categoryText.value = findCategory?.name ?? '';
}

const handleThumbail = (event: Event) => {
    const eventTarget: any = event.target;
    const file = eventTarget.files[0];
    formData.value.thumbnail = file;
}

onMounted(async () => {
    try {
        await categoryStore.getCategories();
        if (!courseStore.$state.currentCourse && props.course) {
            await courseStore.getCourseById(parsedIdFromRoute.value);
        }
        if (props.course) {
            categoryText.value = courseStore.$state.currentCourse?.category as string;
            formData.value.title = courseStore.$state.currentCourse?.title as string;
            formData.value.description = courseStore.$state.currentCourse?.description as string;
            formData.value.learningPurpose = courseStore.$state.currentCourse?.purpose ?? [];
            formData.value.title = courseStore.$state.currentCourse?.title as string;
        }
    } catch (error) {
        console.log(error);
    }
});

</script>

<template>
    <form @submit.prevent="submitAdd">
        <section class="mb-6">
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Title</label>
            <input type="text" id="large-input" v-model="formData.title"
                class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your course title goes here...." required>
        </section>

        <section class="mb-6">
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Description</label>
            <input type="text" id="large-input" v-model="formData.description"
                class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </section>

        <section class="mb-6">
            <label for="large-input" class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Learning
                Purposes</label>
            <div class="w-11/12 flex flex-row">
                <input type="text" id="large-input" v-model="purposeText" placeholder="Add new purpose here"
                    class="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <button class="px-8 primary-btn" @click="addPurpose(purposeText)">Add</button>
            </div>
            <ul>
                <li v-for="(item, index) in formData.learningPurpose" :key="index"
                    class="p-4 bg-slate-200 w-11/12 my-1 flex items-center justify-between">
                    <span>{{ item }}</span>
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </li>
            </ul>
        </section>

        <section>
            <label for="countries_disabled"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-black ">Category</label>
            <div class="w-fit">
                <div>
                    <input type="text" readonly v-model="categoryText"
                        class="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    <button @click="toggleDropdown" class="p-4"><i class="fa-solid fa-chevron-down"></i></button>
                </div>
                <ul v-show="isDropdownOpen" class="">
                    <li v-for="option in categoryStore.$state.categories" :key="option._id" @click="selectCategory(option)"
                        class="p-2 bg-slate-100 w-full cursor-pointer rounded">
                        {{ option.name }}</li>
                </ul>
            </div>
        </section>

        <section>
            <label for="large-input"
                class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black ">Thumbnail</label>
            <div>
                <img v-show="props.course?.thumbnail" :src="props.course?.thumbnail" alt="" class="md:w-5/12 md:h-[400px]">
                <input type="file" accept="image/*" @change="handleThumbail" name="thumbnail" id="thumbnail" required>
            </div>
        </section>

        <!-- show only for editing course -->
        <div v-show="props.course" class="flex justify-between w-11/12 mt-10">
            <button class="anti-btn">Delete Course</button>
            <input type="submit" class="primary-btn" value="Save" @click="submit">
        </div>
        <input type="submit" value="Add"
            class="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-50 ">
    </form>
</template>