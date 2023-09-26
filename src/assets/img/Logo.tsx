import React from "react";

const Logo = ({ className }: { className: string }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="224" height="32" fill="none">
            <g clipPath="url(#a)" fill="#fff">
                <path
                    d="M6.816.955-.001 31.111h11.416l2.17-9.686H31.93l.049-.138a67.255 67.255 0 0 0 3.062-9.769 56.346 56.346 0 0 0 1.372-10.3l.016-.274L6.816.955zm17.355 4.724a21.14 21.14 0 0 1-.611 5.64 24.059 24.059 0 0 1-2.078 5.9c-3.618.044-5.708.016-6.717 0a1.729 1.729 0 0 1-.223 0c.132-.594 2.552-11.258 2.616-11.555.596-.034 2.685-.034 7.013.015zM57.596.942h-5.488L30.85 31.106h5.788s2.146-3.077 2.26-3.252c.208.008 12.671 0 13.035 0 .092.355.79 3.252.79 3.252h12.459L57.596.942zm-6.584 22.459c-.478 0-8.2.008-9.045.014.493-.719 6.3-8.94 6.808-9.666.204.928 2.124 9.159 2.237 9.652zM101.912.935l-6.831 30.157h11.421s2.093-9.353 2.168-9.671a68.795 68.795 0 0 1 1.5-.005c.136.275 4.922 9.676 4.922 9.676h12.467s-4.877-9.022-5.226-9.676c.66-.007 6.022-.007 6.022-.007l.038-.132a63.192 63.192 0 0 0 3.156-9.77 57.352 57.352 0 0 0 1.331-10.3l.012-.282-30.98.01zm18.815 4.464c.036 1.951-.157 3.9-.574 5.806a26.303 26.303 0 0 1-2.142 5.9l-8.347-.008c.136-.6 2.575-11.4 2.651-11.715.805-.033 3.839-.033 8.413.017h-.001zM141.019.924l-6.785 30.16h10.449l6.781-30.16h-10.445zM190.92 4.406C187.168 1.561 181.745-.006 175.676 0a35.849 35.849 0 0 0-17.123 4.334l-.088.042-5.248 23.125.128.1c3.816 2.832 9.247 4.4 15.3 4.4a35.617 35.617 0 0 0 17.082-4.331l.083-.044 5.25-23.123-.14-.097zm-21.205.549a16.923 16.923 0 0 1 5.242-.892c1.59-.012 3.169.259 4.664.8-.106.456-5 21.942-5.063 22.191a15.75 15.75 0 0 1-5.234.889c-1.59.01-3.169-.258-4.666-.795.112-.452 5-21.943 5.057-22.193zM195.604.92l-1.028 4.632h8.3c-.132.638-5.741 25.524-5.741 25.524l11.541-.008s5.663-25.177 5.745-25.524c.326.008 8.351 0 8.351 0L223.8.915 195.604.92zM69.644.943l-1.02 4.637s7.7-.006 8.294 0L71.171 31.1h11.537s5.67-25.181 5.743-25.526l8.365-.007L97.834.934l-28.19.009z"/>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h223.799v32H0z"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default Logo;