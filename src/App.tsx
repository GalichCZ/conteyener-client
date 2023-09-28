import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import SignUpPage from "@/pages/SignUpPage.tsx";
import MainPage from "@/pages/MainPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import Header from "@/features/Header/Header.tsx";
import { createPortal } from "react-dom";
import { Toaster } from "react-hot-toast";
import { RoutesEnum } from "@/enums/routesEnum.ts";
import TablePage from "@/pages/TablePage.tsx";

function App() {

    return (
        <>
            {createPortal(<Toaster/>, document.body)}
            <Header/>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/*Public routes*/}
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/main" element={<MainPage/>}/>

                    {/*Private routes*/}
                    <Route path={RoutesEnum.TABLE} element={<TablePage/>}/>

                    {/*Catch all*/}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>

    )
}

export default App
