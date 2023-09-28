import React from "react";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";
import SignUp from "@/features/SignUp/components/SignUp.tsx";

const SignUpPage = () => {
    return (
        <SectionLayout items="center" justify="center">
            <SignUp/>
        </SectionLayout>
    )
}

export default SignUpPage;
