<script setup lang="ts">
import { Ref, computed, nextTick, onMounted, ref, watch } from 'vue';
import TheMaterialDescription from '../../components/course/TheContentDescription.vue';
import TheContentReading from '../../components/course/TheContentReading.vue';
import TheAnnouncement from '../../components/course/TheAnnouncement.vue';
import AssignmentItem from '../../components/assignment/AssignmentItem.vue';
import TabBarView from '../../components/TabBarView.vue';
import { useRoute } from 'vue-router';
import AssignmentParticipantDetail from '../../components/assignment/AssignmentParticipantDetail.vue';
import ChatArea from '../../components/chat/ChatArea.vue';
import { useCourseStore } from '../../stores/courses';
import { useCommentStore } from '../../stores/comment';

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
const courseStore = useCourseStore();
const commentStore = useCommentStore();
const videoPlayer = ref(null);

const isFacil = computed(() => route.path.includes('facil'));

const isChatShow: Ref<boolean> = ref(false);
const loading = ref(true);

const toggleShowChat = () => {
    isChatShow.value = !isChatShow.value;
    commentStore.$state.visible = !commentStore.$state.visible
};

const comments = [{
    text: 'tess',
    replies: [
        {
            id: 4,
            text: 'reply',
            openInput: false
        },
        {
            id: 5,
            text: 'reply dua',
            openInput: false

        }
    ]
}, {
    text: 'tess',
    replies: [
        {
            id: 4,
            text: 'reply',
            openInput: false
        },
        {
            id: 5,
            text: 'reply dua',
            openInput: false

        }
    ]
}];

const parsedIdFromRoute = computed(() => {
    const separatorIndex = route.path.indexOf('-');
    console.log(separatorIndex);
    const result = route.path.slice(separatorIndex + 1, separatorIndex + 25);
    return result;
});

const isReadingMaterial = computed(() => {
    if (!loading.value) {
        return courseStore.$state.currentCourseContent?.type === 'reading';
    }
});
    
onMounted(async () => {
    try {
        loading.value = true
        if (courseStore.$state.currentCourseContent === null) {
            const courseId = parsedIdFromRoute.value;
            await courseStore.getCourseContentById(courseId, props.id);
        }
        loading.value = false;
    } catch (error) {
        console.log(error);
    }
});

const playVideo = () => {
    const player: any = videoPlayer.value;
    player.play();
}

</script>

<template>
    <div class="mt-20 mr-10 md:mt-28 md:ml-64 mb-20">
        <nav class="inline-flex ml-5" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <router-link to="/mycourse">
                        <a href="#"
                            class="md:text-xl inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                </path>
                            </svg>
                            My Course</a>
                    </router-link>
                </li>
                <li>
                    <div class="inline-flex items-center">
                        <router-link to="/materialcourse">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <a href="#"
                                class="ml-1 md:text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Material</a>
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="inline-flex items-center">
                        <router-link to="/description">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <a href="#"
                                class="ml-1 md:text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Description</a>
                        </router-link>
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

        </section>


        <section class="ml-5 mt-10 text-sm font-medium text-gray-500 dark:text-gray-400 dark:border-gray-700 w-11/12">
            <!-- for reading material -->
            <TabBarView v-if="isReadingMaterial">
                <template v-slot:Material>
                    <TheContentReading />
                </template>
                <template v-slot:Description>
                    <TheMaterialDescription />
                </template>
                
                <template v-slot:Assignment>
                    <div v-if="isFacil" class="px-6">
                        <AssignmentItem v-if="isFacil" />
                        <router-link :to="{ name: 'assignment-add' }" class="primary-btn">New</router-link>
                    </div>
                    <AssignmentParticipantDetail v-else />
                </template>
                <template v-slot:Announcement>
                    <TheAnnouncement />
                </template>
            </TabBarView>

            <!-- for video material --> 
            <TabBarView v-else>
                <template v-slot:Description>
                    <TheMaterialDescription />
                </template>
                
                <template v-slot:Assignment>
                    <div v-if="isFacil" class="px-6">
                        <AssignmentItem v-if="isFacil" />
                        <router-link :to="{ name: 'assignment-add' }" class="primary-btn">New</router-link>
                    </div>
                    <AssignmentParticipantDetail v-else />
                </template>
                <template v-slot:Announcement>
                    <TheAnnouncement />
                </template>
            </TabBarView>
        </section>

        <!-- chat -->
        <article class="fixed bottom-12 right-12 md:bottom-20 md:right-24 flex items-end z-10">
            <div v-show="isChatShow" class="relative left-[20%] w-[360px] h-[400px] dashboard-card overflow-auto rounded-xl">
                <div class="w-[360px] fixed flex flex-col items-end pr-4">
                    <i @click="toggleShowChat" class="fa-solid fa-xmark p-4 cursor-pointer text-red-500"></i>
                </div>
                <ChatArea :course-id="parsedIdFromRoute" v-show="commentStore.$state.visible"/>
            </div>
            <i @click="toggleShowChat"
                class="fa-solid fa-comment-dots fa-xl bg-slate-700 text-slate-200 p-6 rounded-full shadow-xl cursor-pointer"></i>
        </article>

    </div>
    <RouterView />
</template>../../components/base/chat/ChatArea.vue