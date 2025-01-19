import { useMutation } from "react-query";
import { API } from "../../../API/service";

export const useLogout = () => {
    return useMutation(API.logout, {
        onError: (res) => console.log(res)
    });
}