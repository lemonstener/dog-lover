import axios from "axios";
import { loginRequest } from "./requests/loginRequest";

const axiosInstance = axios.create({
    baseURL: 'https://frontend-take-home-service.fetch.com',
    withCredentials: true
})

export const API = {
    login: async (payload: loginRequest) => await axiosInstance.post('auth/login', payload),
    logout: () => axiosInstance.post('auth/logout'),
    getDogBreeds: () => axiosInstance.get('dogs/breeds')
}