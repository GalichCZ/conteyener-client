import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserRegister } from "../Types/UserRegister.ts";
import GInputs from "@/components/GInput/GInputs.ts";
import GButton from "@/components/GInput/GButton.tsx";
import FormLayout from "@/components/Layout/FormLayout.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserRegisterSchema } from "../validation/UserRegisterSchema.js";
import { useRegisterUser } from "@/features/SignUp/hooks/useRegisterUser.ts";
import { RoutesEnum } from "@/enums/routesEnum.ts";
import { useNavigate } from "react-router-dom";
import { displayError } from "@/utils/displayError.ts";

const SignUp = () => {
    const [userData, setUserData] = useState<UserRegister | null>(null)

    const navigate = useNavigate();

    const { isLoading, success, error, setError } = useRegisterUser(userData);

    const { handleSubmit, control } = useForm<UserRegister>({
        resolver: yupResolver(UserRegisterSchema)
    });

    const onSubmit: SubmitHandler<UserRegister> = (data) => {
        console.log(data);
        setUserData(data)
    }

    useEffect(() => {
        if (error) {
            displayError(error)
            setError(null);
            setUserData(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (success) {
            navigate(RoutesEnum.MAIN);
        }
    }, [navigate, success]);

    return (
        <FormLayout isLoading={isLoading} className="-translate-y-[10%]" onFinish={handleSubmit(onSubmit)}>
            <GInputs.Text placeholder="Имя" name="first_name" label="Имя" control={control}/>

            <GInputs.Text placeholder="Фамилия" name="last_name" label="Фамилия" control={control}/>

            <GInputs.Text placeholder="Email" name="email" label="Email" control={control}/>

            <GInputs.Password placeholder="Пароль" name="password" label="Пароль" control={control}/>

            <GInputs.Password placeholder="Повторите Пароль" name="passwordConfirmation" label="Повторите Пароль"
                              control={control}/>

            <GButton className="h-10 text-lg mt-2" text="Регистрация"/>
        </FormLayout>
    )
}

export default SignUp;