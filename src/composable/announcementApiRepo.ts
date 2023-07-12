import axiosInstance from "@/axios";


class AnnouncementApiRepository {
    async fetchAllAnnouncementByCourse(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async createAnnouncement(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }
}


export function useAnnouncementApiRepo(): AnnouncementApiRepository {
    const announcementRepo = new AnnouncementApiRepository();
    return announcementRepo;
}