import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useEffect } from "react";

const LoginPage = () => {
    document.title = 'Dog Lover - Login'
    const navigate = useNavigate();
    const { mutate, isLoading, isSuccess } = useLogin();

    // No need for using a schema package like YUP, because:
    // 1. We only have one form that needs validation in the entire app
    // 2. Yup's built-in email validator does not match the server's email pattern, so we'd need to make our own anyway

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { name: '', email: '' }
    });

    useEffect(() => {
        if (localStorage.length) toast.success('Session terminated', { position: 'top-right' });
        localStorage.clear();
    }, []);

    return (
        <form onSubmit={handleSubmit((v) => mutate(v, {
            onSuccess: () => {
                localStorage.setItem('userName', v.name);
                localStorage.setItem('userEmail', v.email);
                localStorage.setItem('userFavorites', JSON.stringify([]));
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
                    rules={{
                        required: { value: true, message: 'Name is required' }
                    }}
                    render={({ field }) => {
                        return (
                            <TextField error={!!errors.name} helperText={errors.name?.message} label={'Name'} {...field} />
                        )
                    }} />
                <Controller
                    control={control}
                    name={'email'}
                    rules={{
                        required: { value: true, message: 'Email is required' },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email'
                        }
                    }}
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