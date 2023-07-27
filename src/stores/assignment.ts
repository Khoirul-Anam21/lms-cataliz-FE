import { useAssignmentApiRepo } from '../composable/assignmentApiRepo.js'
import { defineStore } from 'pinia';

export interface AssignmentInterface {
    _id: string;
    title: string;
    instruction: string;
    content_id: string; //fk
    createdAt: string;
}

export interface SubmissionInterface {
    _id: string;
    assignment_id: string;
    user: any;
    submission: string;
    isGraded: boolean;
    score: number;
    createdAt: string;
}

const assignmentRepo = useAssignmentApiRepo();
export const useAssignmentStore = defineStore('assignment', {
    state: () => ({
        currentAssignment: null as AssignmentInterface | null,
        currentParticipantSubmission: null as SubmissionInterface | null,
        submissions: null as SubmissionInterface[] | null,
    }),
    actions: {
        async getParticipantAssignmentData(contentId: string) {
            const response = await assignmentRepo.fetchParticipantAssignment(contentId);
            
            if (response.status === 200) {
                this.$state.currentAssignment = response.data.data[0];
                return response;
            }
            this.$state.currentAssignment = null;
            return response;
        },
        async getFacilAssignmentData(contentId: string) {
            const response = await assignmentRepo.fetchFacilAssignment(contentId);
            if (response.status === 200) {
                this.$state.currentAssignment = response.data.data[0];
                return response;
            }
            this.$state.currentAssignment = null;
            return response;
        },
        async getParticipantSubmission(contentId: string) {
            const response = await assignmentRepo.fetchParticipantSubmission(contentId);
            if (response.data.submission) {
                this.$state.currentParticipantSubmission = response.data.submission;
                return response;
            };
            this.$state.currentParticipantSubmission = null;
            return response;
        },
        async getSubmissionsForFacil(contentId: string) {
            const response = await assignmentRepo.fetchAssignmentSubmissions(contentId);
            if (response.data.submissions.length > 0) {
                this.$state.submissions = response.data.submissions;
                return response;
            }
            this.$state.submissions = null;
            return response;
        },
        async createAssignment(body: any) {
            const response = await assignmentRepo.createAssignment(body);
            return response;
        },
        async submitAssignment(assignmentId: string, body: any) {
            const response = await assignmentRepo.submitAssignment(assignmentId, body);
            return response;
        },
        async gradeAssignment(submissionId: string, score: number) {
            const response = await assignmentRepo.gradeAssignment(submissionId, score);
            return response;
        }

    }
})
