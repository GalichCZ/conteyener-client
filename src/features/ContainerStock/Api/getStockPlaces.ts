import axios from "@/provider/axiosInstanse";

const { cacheAxios } = axios;

export const getStockPlaces = async () => {
    return await cacheAxios.get("/stock-places");
}