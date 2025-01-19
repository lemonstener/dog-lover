import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../../features/auth/hooks/useLogin";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../features/auth/schemas/loginFormSchema";

const LoginPage = () => {
    const navigate = useNavigate();
    const onLogin = useLogin();
    
    const { control, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {name: '', email: ''},
        resolver: yupResolver(loginFormSchema)
    });
    console.log(errors)


    return (
        <form onSubmit={handleSubmit((v) => onLogin.mutate(v, {
            onSuccess: () => navigate('/'),
            onError: () => {
                toast.error('Something went wrong', { position: 'top-right'} )
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
                <Button variant='contained' type='submit'>Login</Button>
            </Box>
        </form>
            
    )
}

export default LoginPage;