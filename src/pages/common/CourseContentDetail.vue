<script setup lang="ts">
import { Ref, computed, nextTick, onMounted, ref } from 'vue';
import TheMaterialDescription from '../../components/course/TheContentDescription.vue';
import TheAnnouncement from '../../components/course/TheAnnouncement.vue';
import AssignmentItem from '../../components/assignment/AssignmentItem.vue';
import TabBarView from '../../components/TabBarView.vue';
import { useRoute } from 'vue-router';
import AssignmentParticipantDetail from '../../components/assignment/AssignmentParticipantDetail.vue';


const route = useRoute();

const isFacil = computed(()=> route.path.includes('facil'));

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

        <div class="mt-10 ml-5 font-medium dark:text-natural-900 dark:border-gray-700 w-full">
            <h1 class="space-x-1 text-3xl font-bold">What is Interaction Design</h1>
            <p class="mt-3 text-xl mb-5">Course: Fundamental of Web Design</p>
            <div class="w-full md:w-5/12 h-80 bg-slate-500"></div>
        </div>


        <div
            class="ml-5 mt-10 text-sm font-medium text-gray-500 dark:text-gray-400 dark:border-gray-700 w-11/12">
            <TabBarView>
                <template v-slot:Description>
                    <TheMaterialDescription />
                </template>
                <template v-slot:Assignment>
                    <AssignmentItem v-if="isFacil" />
                    <AssignmentParticipantDetail v-else/>
                </template>
                <template v-slot:Announcement>
                    <TheAnnouncement />
                </template>
            </TabBarView>
        </div>

    </div>
    <RouterView />
</template>