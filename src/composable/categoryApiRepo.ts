import axiosInstance from "@/axios";


class CategoryApiRepository {
    async fetchAllCategories(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async createCategory(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }
}


export function useCategoryApiRepo(): CategoryApiRepository {
    const categoryRepo = new CategoryApiRepository();
    return categoryRepo;
}