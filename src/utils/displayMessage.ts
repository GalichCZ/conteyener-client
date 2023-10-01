import toast from "react-hot-toast";

export const displayMessage = (message: string) => {
    toast(message, {
        duration: 4000,
        position: 'top-center',
        icon: '⚠️',
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