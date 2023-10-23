import toast from "react-hot-toast";
import { Error } from '@/Types';
import { displayMessage } from "@/utils/displayMessage.ts";

export const handleError = (error: Error) => {
    displayError(error);
    if (error.status === 403) {
        displayMessage("Логин сессия просрочена - перенаправление на страницу логина");
        // setTimeout(() => {
        //     window.location.href = "/login";
        //     localStorage.removeItem("token");
        // }, 3000);
    }
}

const displayError = (error: Error) => {
    const status = error.status ? error.status : "";
    toast(error.message + " " + status, {
        duration: 4000,
        position: 'top-center',
        icon: '❌',
        iconTheme: {
            primary: '#000',
            secondary: '#fff',
        },
        ariaProps: {
            role: 'alert',
            'aria-live': 'polite',
        },
    });
}