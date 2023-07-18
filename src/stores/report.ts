import { defineStore } from 'pinia'
import cookie from '@point-hub/vue-cookie'
import axiosInstance from '../axios.js';
import { ref } from 'vue';
import { useReportApiRepo } from '../composable/reportApiRepo.js';

export interface FacilReportInterface {
    _id: string;
    username: string;
    ownedCourses: any[];
    ownedCourseTotal: number;
    participantTotal: number;
    totalAssignments: number
}

export interface FacilReportCourseDetailInterface {
    _id: string;
    assignments: FacilAssignment[];
    participantCount: number;
    contentCount: number;
    assignmentCount: number;
}

export interface ParticipantReportInterface {
    _id: string;
    enrolledCourses: any[];
    enrolledCoursesTotal: number;
    completedCourses: number;
    assignmentCount: number;
}

export interface ParticipantReportCourseDetailInterface {
    _id: string;
    assignments: ParticipantAssignment[];
    totalContents: number;
    completedContents: number;
}

interface ParticipantAssignment {
    _id: string;
    title: string;
    instruction: string;
    content_id: string;
    createdAt: string;
    submitted: boolean;
}

export interface FacilAssignment {
    _id: string;
    title: string;
    instruction: string;
    content_id: string;
    createdAt: string;
}

const reportApiRepo = useReportApiRepo();

export const useReportStore = defineStore('report', {
    state: () => ({
        facilReport: null as FacilReportInterface | null,
        participantReport: null as ParticipantReportInterface | null,
        facilReportCourse: null as FacilReportCourseDetailInterface | null,
        participantReportCourse: null as ParticipantReportCourseDetailInterface | null,
    }),
    actions: {
        async getFacilReport() {
            const response = await reportApiRepo.fetchFacilitatorReport();
            this.$state.facilReport = response.data;
            return response;
        },
        async getFacilReportByCourse(courseId: string) {
            const response = await reportApiRepo.fetchFacilitatorReportDetail(courseId);
            this.$state.facilReportCourse = response.data;
            return response;
        },
        async getParticipantReport() {
            const response = await reportApiRepo.fetchParticipantReport();
            this.$state.participantReport = response.data;
            return response;
        },
        async getParticipantReportByCourse(courseId: string) {
            const response = await reportApiRepo.fetchParticipantReportDetail(courseId);
            this.$state.participantReportCourse = response.data;
            return response;
        },
    }
})
