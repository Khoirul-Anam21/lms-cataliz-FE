import axiosInstance from "@/axios";


class AssignmentApiRepository {
    async createAssignment(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async fetchAssignmentSubmissions(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async submitAssignment(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async gradeAssignment(userId: string) {
        const response = await axiosInstance.delete('/users/' + userId);
        return response;
    }
}


export function useAssignmentApiRepo(): AssignmentApiRepository {
    const assignmentRepo = new AssignmentApiRepository();
    return assignmentRepo;
}