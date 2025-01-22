import { useMutation } from "react-query";
import { API } from "../../../API/service";

export const usePostDogsMatch = () => {
    return useMutation(API.postDogsMatch, {
        onError: (res) => console.log(res)
    });
}