import { object, string } from "yup";

export const loginFormSchema = object().shape({
    name: string().required('Name is required'),
    email: string().email('Invalid email pattern').required('Email is required')
})