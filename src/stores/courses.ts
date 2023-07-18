import { defineStore } from 'pinia'
import { useCourseApiRepo } from '../composable/courseApiRepo.js';
import { useCourseContentApiRepo } from '../composable/courseContentApiRepo.js';

const courseApiRepo = useCourseApiRepo();
const courseContentApiRepo = useCourseContentApiRepo();
export interface CourseContentDisplayProps {
    _id: string;
    course: any;
    thumbnail: string;
    title: string;
    reading: string;
    material: string;
    type: string;
    duration: number;
    description: string;
    isComplete: boolean; 
}

export interface CourseDisplayProps {
    _id: string;
    thumbnail: string;
    title: string;
    category: string;
    category_id: string;
    facilitator: any;
    purpose: string[];
    published: boolean;
    description: string;
    totalDuration: number;
    content: number;
    contents: CourseContentDisplayProps[]
}


export interface ParticipantCourseDisplayProps extends CourseDisplayProps {
    _id: string;
    facilitator: any;
    thumbnail: string;
    title: string;
    category_id: string;
    participation_id: string;
}

export interface FacilitatorCourseDisplayProps {
    _id: string;
    facilitator: any;
    thumbnailPath: string;
    title: string;
    published: boolean;
    category_id: string;
    studentCount: number;
}


export const useCourseStore = defineStore('course', {
    state: () => ({
        courses: null as CourseDisplayProps[] | null,
        participantCourses: null as ParticipantCourseDisplayProps[] | null,
        facilitatorCourses: null as FacilitatorCourseDisplayProps[] | null,
        currentCourse: null as CourseDisplayProps | null,
        currentCourseContent: null as CourseContentDisplayProps | null,
        currentCourseId: ''
    }),
    actions: {
        async getAllCourse() {
            const response = await courseApiRepo.fetchAllCourses();
            this.$state.courses = response.data.courses;
            console.log(this.$state.courses);
            return response;
        },
        async getCourseById(courseId: string) {
            const response = await courseApiRepo.fetchCourse(courseId);
            this.$state.currentCourse = response.data;
            // console.log(response.data);
            return response;
        },
        async getCourseContentById(courseId: string, contentId: string) {
            const response = await courseApiRepo.fetchCourse(courseId);
            this.$state.currentCourse = response.data;
            const contents = this.$state.currentCourse?.contents ?? [];
            const contentIndex = contents?.findIndex((content) => content._id === contentId) ?? -4;
            this.$state.currentCourseContent = contents[contentIndex];
        },
        async getParticipantCourses(){
            const response = await courseApiRepo.fetchParticipantCourses();
            this.$state.participantCourses = response.data.data;
            return response;
        },
        async getFacilCourses() {
            const response = await courseApiRepo.fetchFacilitatorCourses();
            this.$state.facilitatorCourses = response.data.courses;
            return response;
        },
        async createCourse(body: any) {
            const response = await courseApiRepo.createCourse(body);
            this.$state.currentCourseId = response.data.id;
            localStorage.setItem('courseId', response.data.id);
            await this.getCourseById(response.data.id);
            return response;
        },
        async createCourseContent(body: any) {
            const response = await courseContentApiRepo.createCourseContent(body);
            // await this.getCourseById(courseId);
            return response;
        }

    }
})
