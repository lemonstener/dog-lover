import { useQuery } from "react-query"
import { API } from "../../../API/service"

export const useDogSearch = () => {
    return useQuery({ queryKey: ['dogSearch'], queryFn: API.getDogSearch, retry: false })
}