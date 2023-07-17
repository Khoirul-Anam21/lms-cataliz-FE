import axiosInstance from "../axios";


class CategoryApiRepository {
    private baseUrl = '/categories'
    async fetchAllCategories() {
        const response = await axiosInstance.get(this.baseUrl + '/')
        return response;
    }

    async createCategory(name: string) {
        const response = await axiosInstance.post(this.baseUrl + '/', { name });
        return response;
    }
}


export function useCategoryApiRepo(): CategoryApiRepository {
    const categoryRepo = new CategoryApiRepository();
    return categoryRepo;
}