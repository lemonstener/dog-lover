import { useMutation } from "react-query";
import { API } from "../../../API/service";

export const useLogin = () => {
    return useMutation(API.login, {
        onError: (res) => console.log(res)
    });
}