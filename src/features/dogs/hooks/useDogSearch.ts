import { useQuery } from "react-query"
import { API } from "../../../API/service"

export const useDogSearch = (params?: string) => {
    return useQuery({ queryKey: ['dogSearch'], queryFn: () => API.getDogSearch(params ?? ''), retry: false })
}