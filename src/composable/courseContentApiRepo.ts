import axiosInstance from "../axios";


class CourseContentApiRepository {
    private readonly baseUrl = '/course-contents'
    async fetchParticipantCourseContent(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async fetchFacilitatorCourseContent(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async createCourseContent(body: any) {
        const response = await axiosInstance.post(this.baseUrl + '/', body);
        return response;
    }

    async updateCourseContent(contentId: string, body: any) {
        const response = await axiosInstance.put(this.baseUrl + '/' + contentId, body);
        return response;
    }

    async deleteCourseContent(courseId: string, contentId: string) {
        const response = await axiosInstance.delete(this.baseUrl + '/' + contentId, { params: { course_id: courseId } });
        return response;
    }
}


export function useCourseContentApiRepo(): CourseContentApiRepository {
    const courseContentRepo = new CourseContentApiRepository();
    return courseContentRepo;
}