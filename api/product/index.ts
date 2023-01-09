import apiClient from "../../services/axios";



export const getProduct = async (url = '/products')=>{
    try {
        const res = await apiClient.get(url)
        return res;
    } catch (error) {
        console.log(error)
    }
}