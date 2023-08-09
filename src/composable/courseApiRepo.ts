import axiosInstance from "../axios";


class CourseApiRepository {
    private  baseRoute = '/courses';
    async fetchAllCourses(page?: number, limit?: number) {
        const response = await axiosInstance.get( this.baseRoute + '')
        return response;
    }

    async fetchParticipantCourses() {
        const response = await axiosInstance.get(this.baseRoute + '/student/learnings')
        return response;
    }

    async fetchFacilitatorCourses() {
        const response = await axiosInstance.get(this.baseRoute + '/facil/learnings')
        return response;
    }

    async fetchCourseParticipant(courseId: string) {
        const response = await axiosInstance.get(this.baseRoute + '/course-participation/course/' + courseId)
        return response;
    }

    async fetchCourseProgress(courseId: string) {
        const response = await axiosInstance.get(this.baseRoute + '/course-participation/course/' + courseId);
        return response;
    }

    async createCourse(body: any) {
        const response = await axiosInstance.post(this.baseRoute, body);
        return response;
    }

    async startLearningCourse(courseId: string) {
        const response = await axiosInstance.post(this.baseRoute + "/student/learnings", { course_id: courseId });
        return response;
    }

    async completeCourseContentProgress(participation_id: string, content_id: string) {
        const response = await axiosInstance.patch(this.baseRoute + "/course-participation/" + participation_id, { courseContent_id: content_id });
        return response;
    }

    async fetchCourse(courseId: string) {
        const response = await axiosInstance.get(this.baseRoute + "/" + courseId);
        return response;
    }

    async publishCourse(courseId: string) {
        const response = await axiosInstance.put(this.baseRoute + '/course-publish/' + courseId);
        return response;
    }

    async updateCourse(courseId: string, body: any) {
        const response = await axiosInstance.put(this.baseRoute + '/' + courseId, body);
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