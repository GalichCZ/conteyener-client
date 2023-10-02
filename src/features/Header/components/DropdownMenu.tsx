import React from "react";
import { Dropdown, MenuProps, Space } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/enums/routesEnum.ts";

const DropdownMenu = () => {
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: <Link to={RoutesEnum.USERS}>Пользователи</Link>,
        },
        {
            key: "2",
            label: <Link to={RoutesEnum.STORES}>Склады</Link>,
        },
        {
            key: "3",
            label: <Link to={RoutesEnum.DELIVERY_CHANNELS}>Каналы поставки</Link>,
        },
        {
            key: "4",
            label: <Link to={RoutesEnum.CONTAINER_STOCK}>Сток Сдачи</Link>,
        },
    ];

    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown menu={{ items }} placement="bottomRight">
                    <SettingOutlined className="scale-150"/>
                </Dropdown>
            </Space>
        </Space>
    );
}

export default DropdownMenu;