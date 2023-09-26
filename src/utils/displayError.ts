import toast from "react-hot-toast";
import { Error } from '@/Types';

export const displayError = (error: Error) => {
    toast(error.message + " " + error.status, {
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