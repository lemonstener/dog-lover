import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../../features/auth/hooks/useLogin";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const { control, handleSubmit } = useForm({defaultValues: {name: '', email: ''}})
    const navigate = useNavigate();
    const onLogin = useLogin();

    return (
        <form onSubmit={handleSubmit((v) => onLogin.mutate(v, {onSuccess: () => navigate('/')}))}>
            <Typography variant='h1'>Login</Typography>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
                <Controller control={control} name={'name'} render={({ field }) => <TextField label={'Name'} {...field} />} />
                <Controller control={control} name={'email'} render={({ field }) => <TextField label={'Email'} {...field} />} />
                <Button variant='contained' type='submit'>Login</Button>
            </Box>
        </form>
            
    )
}

export default LoginPage;