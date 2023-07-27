import axiosInstance from "../axios";


class AssignmentApiRepository {
    private readonly baseUrl = "/assignments"
    async createAssignment(body: any) {
        const response = await axiosInstance.post(this.baseUrl, body);
        return response;
    }

    async fetchAssignmentSubmissions(contentId: string) {
        const response = await axiosInstance.get(this.baseUrl + "/submissions-facil/courseContent/" + contentId);
        return response;
    }

    async fetchParticipantSubmission(contentId: string) {
        const response = await axiosInstance.get(this.baseUrl + "/submissions-participant/courseContent/" + contentId);
        return response;
    }

    async submitAssignment(id: string, body: any) {
        const response = await axiosInstance.post(this.baseUrl + "/submit/" + id, body);
        return response;
    }

    async gradeAssignment(submissionId: string, score: number) {
        const response = await axiosInstance.patch(this.baseUrl + "/grade/" + submissionId, { score });
        return response;
    }

    async fetchParticipantAssignment(contentId: string) {
        const response = await axiosInstance.get(this.baseUrl + "/participant/courseContent/" + contentId);
        return response;
    }

    async fetchFacilAssignment(contentId: string) {
        const response = await axiosInstance.get(this.baseUrl + "/facil/courseContent/" + contentId);
        return response;
    }
}


export function useAssignmentApiRepo(): AssignmentApiRepository {
    const assignmentRepo = new AssignmentApiRepository();
    return assignmentRepo;
}