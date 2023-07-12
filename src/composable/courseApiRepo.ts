import axiosInstance from "@/axios";


class CourseApiRepository {
    async fetchAllCourses(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async fetchParticipantCourses(userId: string) {
        const response = await axiosInstance.get('/users/' + userId)
        return response;
    }

    async fetchFacilitatorCourses(userId: string) {
        const response = await axiosInstance.get('/users/' + userId)
        return response;
    }

    async fetchCourseParticipant(userId: string) {
        const response = await axiosInstance.get('/users/' + userId)
        return response;
    }

    async createCourse(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async startCourseLearning(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async completeCourseContentProgress(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async fetchCourse(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async publishCourse(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async updateCourse(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async deleteCourse(userId: string) {
        const response = await axiosInstance.delete('/users/' + userId);
        return response;
    }
}


export function useCourseApiRepo(): CourseApiRepository {
    const courseRepo = new CourseApiRepository();
    return courseRepo;
}