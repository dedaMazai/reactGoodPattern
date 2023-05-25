/* eslint-disable i18next/no-literal-string */
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getUserAuthData } from "@/entities/User";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import RoutePath from "@/shared/const/router";
import { LangSwitcher } from "@/features/LangSwitcher";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <AppLink
                    hovered
                    to={RoutePath.main()}
                >
                    <p>На главную</p>
                    <p>Вы авторизованы</p>
                </AppLink>
                <LangSwitcher />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLink
                hovered
                to={RoutePath.main()}
            >
                <p>На главную</p>
            </AppLink>
            <LangSwitcher />
        </header>
    );
});
