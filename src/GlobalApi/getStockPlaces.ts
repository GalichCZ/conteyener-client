import axios from "@/provider/axiosInstanse.ts";

const { cacheAxios } = axios;

export const getStockPlaces = async () => {
    return await cacheAxios.get("/stock-places");
}