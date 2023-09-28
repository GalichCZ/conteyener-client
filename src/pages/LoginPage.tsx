import React from "react";
import Login from "@/features/Login/components/Login.tsx";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";

const LoginPage = () => {
    return (
        <SectionLayout items="center" justify="center">
            <Login/>
        </SectionLayout>
    )
}

export default LoginPage;
