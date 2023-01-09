import apiClient from "../../services/axios";
import  {AxiosResponse} from 'axios';


export const getProduct = async (url = '/products')=>{
    try {
        const res = await apiClient.get(url)
        return res;
    } catch (error) {
        console.log(error)
    }
}