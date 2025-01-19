import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../schemas/loginFormSchema";
import { useEffect } from "react";

const LoginPage = () => {
    document.title = 'Dog Lover - Login'
    const navigate = useNavigate();
    const { mutate, isLoading, isSuccess } = useLogin();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { name: '', email: '' },
        resolver: yupResolver(loginFormSchema)
    });

    useEffect(() => {
        if (!!localStorage.length) toast.success('Session terminated', { position: 'top-right' });
        localStorage.clear();
    }, []);

    return (
        <form onSubmit={handleSubmit((v) => mutate(v, {
            onSuccess: () => {
                localStorage.setItem('userName', v.name);
                localStorage.setItem('userEmail', v.email);
                navigate('/');
            },
            onError: () => {
                toast.error('Something went wrong', { position: 'top-right' });
            }
        }))}>
            <Typography variant='h1'>Login</Typography>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
                <Controller
                    control={control}
                    name={'name'}
                    render={({ field }) => {
                        return (
                            <TextField error={!!errors.name} helperText={errors.name?.message} label={'Name'} {...field} />
                        )
                    }} />
                <Controller
                    control={control}
                    name={'email'}
                    render={({ field }) => {
                        return (
                            <TextField error={!!errors.email} helperText={errors.email?.message} label={'Email'} {...field} />
                        )
                    }} />
                <Button
                    disabled={isLoading || isSuccess}
                    variant='contained'
                    type='submit'
                >
                    {isLoading ? 'Logging in' : 'Log in'}
                </Button>
            </Box>
        </form>

    )
}

export default LoginPage;