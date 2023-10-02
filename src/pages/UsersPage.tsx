import React from 'react';
import Users from "@/features/Users/components/Users.tsx";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";

const UsersPage = () => {
    return (
        <SectionLayout justify="center" items="start">
            <Users/>
        </SectionLayout>
    );
}

export default UsersPage;
