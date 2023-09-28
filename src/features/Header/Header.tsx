import React from "react";
import Logo from "@/assets/img/Logo.tsx";
import { Colors } from "@/assets/colors.ts";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/enums/routesEnum.ts";

const Header = () => {
    return (
        <header style={{ background: Colors.PATRIOT }}
                className="flex items-center p-4 shadow-lg w-full fixed">
            <Logo className="absolute"/>
            <nav className="w-full flex justify-center">
                <ul className="flex gap-4 text-white ">
                    <li>
                        <Link to={RoutesEnum.MAIN}>
                            Главная
                        </Link>
                    </li>
                    <li>

                        <Link to={RoutesEnum.LOGIN}>
                            Войти
                        </Link>
                    </li>
                    <li>

                        <Link to={RoutesEnum.SIGNUP}>
                            Зарегистрироваться
                        </Link>
                    </li>
                    <li>

                        <Link to={RoutesEnum.TABLE}>
                            Таблица
                        </Link>
                    </li>
                    <li>
                        <Link to={RoutesEnum.TABLE_HIDDEN}>
                            Таблица скрытых
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;