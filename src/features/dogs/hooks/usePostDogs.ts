import { useMutation } from "react-query";
import { API } from "../../../API/service";

export const usePostDogs = () => {
    return useMutation(API.postDogs, {
        onError: (res) => console.log(res)
    });
}