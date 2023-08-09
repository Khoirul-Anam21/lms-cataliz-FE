<script setup lang="ts">
import { Ref, computed, nextTick, onBeforeMount, onMounted, reactive, ref, watch } from 'vue';
import TheMaterialDescription from '../../components/course/TheContentDescription.vue';
import TheContentReading from '../../components/course/TheContentReading.vue';
import TheAnnouncement from '../../components/course/TheAnnouncement.vue';
import AssignmentItem from '../../components/assignment/AssignmentItem.vue';
import TabBarView from '../../components/TabBarView.vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import AssignmentParticipantDetail from '../../components/assignment/AssignmentParticipantDetail.vue';
import ChatArea from '../../components/chat/ChatArea.vue';
import { useCourseStore } from '../../stores/courses';
import { useCommentStore } from '../../stores/comment';
import { useAnnouncementStore } from '../../stores/announcement';


// for disabling attributes inherited
defineOptions({
    inheritAttrs: false
})

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const route = useRoute();
const routerInstance = useRouter();
const courseStore = useCourseStore();
const commentStore = useCommentStore();
const announcementStore = useAnnouncementStore();
const videoPlayer = ref(null);

const isFacil = computed(() => route.path.includes('facil'));

const isChatShow: Ref<boolean> = ref(false);
const loading = ref(true);
const participationLoading = ref(false);

const toggleShowChat = () => {
    isChatShow.value = !isChatShow.value;
    commentStore.$state.visible = !commentStore.$state.visible
};

const parsedCourseId = computed(() => {
    const separatorIndex = route.path.indexOf('-');
    const result = route.path.slice(separatorIndex + 1, separatorIndex + 25);
    return result;
});

const isReadingMaterial = computed(() => {
    if (!loading.value) {
        return courseStore.$state.currentCourseContent?.type === 'reading';
    }
});

const goPrevious = async () => {
    try {
        await courseStore.getCourseParticipation(courseStore.$state.currentCourse?._id as string);

        const title = courseStore.$state.currentCourse?.title + "-" + courseStore.$state.currentCourse?._id
        const contents = courseStore.$state.currentCourse?.contents ?? [];
        const currentIndex = contents?.findIndex(content => content._id === courseStore.$state.currentCourseContent?._id);
        if (!contents[currentIndex - 1]) {
            return;
        }
        const contentParticipation = courseStore.$state.currentCourseParticipation?.contentDetail.filter((participation) => participation.content_id === contents[currentIndex - 1]._id)[0];
        contents[currentIndex - 1].isComplete = contentParticipation?.isComplete as boolean;
        const params = { title, id: contents[currentIndex - 1]._id }
        if (isFacil.value) {
            routerInstance.push({ name: 'facil-material-detail', params });
            return;
        }
        routerInstance.push({ name: 'std-material-detail', params });
        courseStore.$state.currentCourseContent = contents[currentIndex - 1];
    } catch (error) {
        console.log(error);
    }
}

const goNext = async () => {
    try {
        await courseStore.getCourseParticipation(courseStore.$state.currentCourse?._id as string);

        const title = courseStore.$state.currentCourse?.title + "-" + courseStore.$state.currentCourse?._id
        const contents = courseStore.$state.currentCourse?.contents ?? [];
        const currentIndex = contents?.findIndex(content => content._id === courseStore.$state.currentCourseContent?._id);
        if (!contents[currentIndex + 1]) {
            return;
        }
        const contentParticipation = courseStore.$state.currentCourseParticipation?.contentDetail.filter((participation) => participation.content_id === contents[currentIndex + 1]._id)[0];
        contents[currentIndex + 1].isComplete = contentParticipation?.isComplete as boolean;
        const params = { title, id: contents[currentIndex + 1]._id }
        if (isFacil.value) {
            routerInstance.push({ name: 'facil-material-detail', params });
            return;
        }
        routerInstance.push({ name: 'std-material-detail', params });
        courseStore.$state.currentCourseContent = contents[currentIndex + 1];
        console.log(courseStore.$state.currentCourseContent);
    } catch (error) {
        console.log(error);
    }
}


const completed = computed(() => {
    if (!courseStore.$state.currentCourse) {
            return;
        }
        const contents = courseStore.$state.currentCourse?.contents ?? [];
        const currentIndex = contents?.findIndex(content => content._id === courseStore.$state.currentCourseContent?._id);
        if (!contents[currentIndex]) {
            return;
        }
        const contentParticipation = courseStore.$state.currentCourseParticipation?.contentDetail.filter((participation) => participation.content_id === contents[currentIndex]._id)[0];
        const completedContent = ref(contentParticipation?.isComplete);
        const completedReactive = reactive({completedContent});
        return completedReactive.completedContent;
})
const markAsDone = async () => {
    try {
        console.log(completed.value);
        participationLoading.value = true;
        await courseStore.completeCourseContent(courseStore.$state.currentCourseParticipation?._id as string, courseStore.currentCourseContent?._id as string);
        await courseStore.getCourseParticipation(parsedCourseId.value);
        await courseStore.getCourseContentById(parsedCourseId.value, props.id);
        // courseLearnt.value = true;
        // completed.value = true; 
        console.log(completed.value);
        participationLoading.value = false;
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
    try {
        loading.value = true
        const courseId = parsedCourseId.value;
        await courseStore.getCourseContentById(parsedCourseId.value, props.id);
        if (courseStore.$state.currentCourseContent === null) {
            await announcementStore.getAllAnnouncement(courseId);
        }
        await courseStore.getCourseById(courseId);
        await courseStore.getCourseParticipation(courseId);
        const contents = courseStore.$state.currentCourse?.contents ?? [];
        const currentIndex = contents?.findIndex(content => content._id === courseStore.$state.currentCourseContent?._id);
        if (!contents[currentIndex]) {
            return;
        }
        const contentParticipation = courseStore.$state.currentCourseParticipation?.contentDetail.filter((participation) => participation.content_id === contents[currentIndex]._id)[0];
        contents[currentIndex].isComplete = contentParticipation?.isComplete as boolean;
        console.log(contentParticipation);
        courseStore.$state.currentCourseContent = contents[currentIndex];
        loading.value = false;
    } catch (error) {
        console.log(error);
    }
});


</script>

<template>
    <div class="mt-20 mr-10 md:mt-28 md:ml-64 mb-20">
        <nav class="inline-flex ml-5" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="md:text-xl inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-5 h-5 mr-2 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg>
                        My Course</a>
                </li>
                <li>
                    <div class="inline-flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                            class="ml-1 md:text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Material</a>
                    </div>
                </li>
                <li>
                    <div class="inline-flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                            class="ml-1 md:text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Description</a>
                    </div>
                </li>
            </ol>
        </nav>

        <section class="mt-10 ml-5 font-medium dark:text-natural-900 dark:border-gray-700 w-full">
            <h1 class="space-x-1 text-3xl font-bold">{{ courseStore.$state.currentCourseContent?.title }}</h1>
            <p class="mt-3 text-xl mb-5">Course: {{ courseStore.$state.currentCourse?.title }}</p>
            <img v-if="isReadingMaterial" :src="courseStore.$state.currentCourseContent?.thumbnail" alt=""
                class="w-full md:w-5/12 h-80">
            <video v-else ref="videoPlayer" controls class="w-full md:w-5/12 h-80">
                <source :src="courseStore.$state.currentCourseContent?.material" type="video/mp4">
                <source :src="courseStore.$state.currentCourseContent?.material" type="video/webm">
                <source :src="courseStore.$state.currentCourseContent?.material" type="video/ogg">
                <source :src="courseStore.$state.currentCourseContent?.material" type="video/avi">
                <source :src="courseStore.$state.currentCourseContent?.material" type="video/mkv">
            </video>
            <div class="flex items-center justify-between w-5/12 pt-4">
                <button @click="goPrevious" class="outline-btn">Previous</button>
                <button v-if="completed" v-show="!participationLoading" class="secondary-btn bg-green-300 text-green-900"
                    disabled>Already Learnt</button>
                <button v-else @click="markAsDone" v-show="!participationLoading" class="secondary-btn">Mark as
                    Done</button>
                <button v-show="participationLoading" class="secondary-btn" disabled>Learning...</button>
                <button @click="goNext" class="outline-btn">Next</button>
            </div>

        </section>


        <section class="ml-5 mt-5 text-sm font-medium text-gray-500 dark:text-gray-400 dark:border-gray-700 w-11/12">
            <!-- for reading material -->
            <TabBarView v-if="isReadingMaterial">
                <template v-slot:Material>
                    <TheContentReading :content="(courseStore.$state.currentCourseContent?.reading as string)" />
                </template>
                <template v-slot:Description>
                    <TheMaterialDescription
                        :description="(courseStore.$state.currentCourseContent?.description as string)" />
                </template>

                <template v-slot:Assignment>
                    <div v-if="isFacil" class="px-6">
                        <AssignmentItem v-if="isFacil"
                            :content-id="(courseStore.$state.currentCourseContent?._id as string)" />
                    </div>
                    <AssignmentParticipantDetail v-else
                        :content-id="(courseStore.$state.currentCourseContent?._id as string)" />
                </template>
                <template v-slot:Announcement>
                    <TheAnnouncement :course-id="(courseStore.$state.currentCourse?._id as string)" />
                </template>
            </TabBarView>

            <!-- for video material -->
            <TabBarView v-else>
                <template v-slot:Description>
                    <TheMaterialDescription
                        :description="(courseStore.$state.currentCourseContent?.description as string)" />
                </template>

                <template v-slot:Assignment>
                    <div v-if="isFacil" class="px-6">
                        <AssignmentItem v-if="isFacil"
                            :content-id="(courseStore.$state.currentCourseContent?._id as string)" />
                    </div>
                    <AssignmentParticipantDetail v-else
                        :content-id="(courseStore.$state.currentCourseContent?._id as string)" />
                </template>
                <template v-slot:Announcement>
                    <TheAnnouncement :course-id="(courseStore.$state.currentCourse?._id as string)" />
                </template>
            </TabBarView>
        </section>

        <!-- chat -->
        <article class="fixed bottom-12 right-12 md:bottom-20 md:right-24 flex items-end z-10">
            <div v-show="isChatShow"
                class="relative left-[20%] w-[360px] h-[400px] dashboard-card overflow-auto rounded-xl">
                <div class="w-[360px] fixed flex flex-col items-end pr-4">
                    <i @click="toggleShowChat" class="fa-solid fa-xmark p-4 cursor-pointer text-red-500"></i>
                </div>
                <ChatArea :course-id="parsedCourseId" v-show="commentStore.$state.visible" />
            </div>
            <i @click="toggleShowChat"
                class="fa-solid fa-comment-dots fa-xl bg-slate-700 text-slate-200 p-6 rounded-full shadow-xl cursor-pointer"></i>
        </article>

    </div>
    <router-view :key="$route.fullPath"></router-view>
</template>