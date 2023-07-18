import axiosInstance from "../axios";


class ReportApiRepository {
    private baseUrl = '/reports';
    async fetchParticipantReport() {
        const response = await axiosInstance.get(this.baseUrl + '/participant')
        return response;
    }

    async fetchParticipantReportDetail(courseId: string) {
        const response = await axiosInstance.get(this.baseUrl + '/participant/course/' + courseId);
        return response;
    }

    async fetchFacilitatorReport() {
        const response = await axiosInstance.get(this.baseUrl + '/facil')
        return response;
    }

    async fetchFacilitatorReportDetail(courseId: string) {
        const response = await axiosInstance.get(this.baseUrl + '/facil/course/' + courseId);
        return response;
    }

}


export function useReportApiRepo(): ReportApiRepository {
    const reportRepo = new ReportApiRepository();
    return reportRepo;
}