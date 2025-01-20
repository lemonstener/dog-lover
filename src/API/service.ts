import axios from "axios";

import { DogSearchResponse } from "./responses/dogSearchResponse";
import { LoginRequest } from "./requests/loginRequest";
import { Dog } from "./responses/dogResponse";

export const service = axios.create({
    baseURL: 'https://frontend-take-home-service.fetch.com',
    withCredentials: true
})

export const API = {
    login: (payload: LoginRequest) => service.post('auth/login', payload),
    logout: () => service.post('auth/logout'),
    getDogBreeds: () => service.get('dogs/breeds'),
    getDogSearch: () => service.get<DogSearchResponse>('/dogs/search'),
    postDogs: (payload: string[]) => service.post<Dog[]>('/dogs', payload)
}