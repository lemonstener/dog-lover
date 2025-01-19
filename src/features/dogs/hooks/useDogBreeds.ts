import { useQuery } from "react-query"
import { API } from "../../../API/service"

export const useDogBreeds = () => {
    return useQuery({ queryKey: ['dogBreeds'], queryFn: API.getDogBreeds })
}