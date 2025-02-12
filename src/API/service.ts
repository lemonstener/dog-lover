import axios from "axios";

import { DogSearchResponse } from "./responses/dogSearchResponse";
import { LoginRequest } from "./requests/loginRequest";
import { Dog } from "./responses/dog";
import { DogMatchResponse } from "./responses/dogMatchResponse";

export const service = axios.create({
    baseURL: 'https://frontend-take-home-service.fetch.com',
    withCredentials: true
})

export const API = {
    login: (payload: LoginRequest) => service.post('auth/login', payload),
    logout: () => service.post('auth/logout'),
    getDogBreeds: () => service.get('dogs/breeds'),
    getDogSearch: (params?: string) =>
        service.get<DogSearchResponse>(params ? `/dogs/search?${params}` : '/dogs/search?sort=breed:asc'),
    postDogs: (payload: string[]) => service.post<Dog[]>('/dogs', payload),
    postDogsMatch: (payload: string[]) => service.post<DogMatchResponse>('/dogs/match', payload)
}