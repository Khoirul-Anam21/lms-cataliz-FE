import axiosInstance from "@/axios";


class ReportApiRepository {
    async fetchParticipantReport(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async fetchParticipantReportDetail(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async fetchFacilitatorReport(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async fetchFacilitatorReportDetail(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

}


export function useReportApiRepo(): ReportApiRepository {
    const reportRepo = new ReportApiRepository();
    return reportRepo;
}