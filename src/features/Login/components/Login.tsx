import React, { useEffect } from "react";
import GInputs from "@/components/GInput/GInputs.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { Credentials } from "../types/Credentials.ts";
import GButton from "@/components/GInput/components/GButton.tsx";
import FormLayout from "@/components/Layout/FormLayout.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { CredentialsSchema } from "../validation/CredentialsSchema.js";
import { useLogin } from "../hooks/useLogin.ts";
import { RoutesEnum } from "@/enums/routesEnum.ts";
import { handleError } from "@/utils/handleError.ts";

const Login = () => {

    const { isLoading, success, error, setError, callLogin } = useLogin();

    const { handleSubmit, control } = useForm<Credentials>({
        resolver: yupResolver(CredentialsSchema)
    });

    const onSubmit: SubmitHandler<Credentials> = (data) => {
        callLogin(data)
    }

    useEffect(() => {
        if (error) {
            handleError(error)
            setError(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            window.location.href = RoutesEnum.MAIN;
        }
    }, [success]);

    return (
        <FormLayout isLoading={isLoading} className="-translate-y-1/2" onFinish={handleSubmit(onSubmit)}>
            <GInputs.Text type="email" placeholder="email" name="email" label="Email"
                          control={control}/>

            <GInputs.Password placeholder="Пароль" name="password" label="Пароль" control={control}/>

            <GButton className="w-1/4 h-10 text-lg mt-2" text="Войти"/>
        </FormLayout>
    )
}

export default Login;