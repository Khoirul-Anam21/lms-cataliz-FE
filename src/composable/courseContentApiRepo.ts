import axiosInstance from "@/axios";


class CourseContentApiRepository {
    async fetchParticipantCourseContent(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async fetchFacilitatorCourseContent(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async createCourseContent(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async updateCourseContent(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async deleteCourseContent(userId: string) {
        const response = await axiosInstance.delete('/users/' + userId);
        return response;
    }
}


export function useCourseContentApiRepo(): CourseContentApiRepository {
    const courseContentRepo = new CourseContentApiRepository();
    return courseContentRepo;
}