import React, { useEffect, useState } from "react";
import GInputs from "@/components/GInput/GInputs.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { Credentials } from "../types/Credentials.ts";
import GButton from "@/components/GInput/GButton.tsx";
import AuthenticationLayout from "@/components/Layout/AuthenticationLayout.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { CredentialsSchema } from "../validation/CredentialsSchema.js";
import { useLogin } from "../hooks/useLogin.ts";
import { RoutesEnum } from "@/enums/routesEnum.ts";
import { useNavigate } from "react-router-dom";
import { displayError } from "@/utils/displayError.ts";

const Login = () => {
    const [credentials, setCredentials] = useState<Credentials | null>(null);

    const navigate = useNavigate();

    const { isLoading, success, error, setError } = useLogin(credentials);

    const { handleSubmit, control } = useForm<Credentials>({
        resolver: yupResolver(CredentialsSchema)
    });

    const onSubmit: SubmitHandler<Credentials> = (data) => {
        console.log(data);
        setCredentials(data);
    }

    useEffect(() => {
        if (error) {
            displayError(error)
            setError(null);
            setCredentials(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            navigate(RoutesEnum.MAIN);
        }
    }, [navigate, success]);

    return (
        <AuthenticationLayout isLoading={isLoading} className="-translate-y-1/2" onFinish={handleSubmit(onSubmit)}>
            <GInputs.Text type="email" placeholder="email" name="email" label="Email"
                          control={control}/>

            <GInputs.Password placeholder="Пароль" name="password" label="Пароль" control={control}/>

            <GButton className="w-1/4 h-10 text-lg" text="Войти"/>
        </AuthenticationLayout>
    )
}

export default Login;