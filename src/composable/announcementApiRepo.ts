import axiosInstance from "../axios";


class AnnouncementApiRepository {
    private readonly baseUrl = "/announcements";
    async fetchAllAnnouncementByCourse(courseId: string) {
        const response = await axiosInstance.get(this.baseUrl + "/course/" + courseId);
        return response;
    }

    async createAnnouncement(courseId: string, description: string) {
        const response = await axiosInstance.post(this.baseUrl, { course_id: courseId, description });
        return response;
    }
}


export function useAnnouncementApiRepo(): AnnouncementApiRepository {
    const announcementRepo = new AnnouncementApiRepository();
    return announcementRepo;
}