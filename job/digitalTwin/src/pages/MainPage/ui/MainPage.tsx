import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Counter } from "@/entities/Counter";

import cls from "./MainPage.module.scss";
import { LangSwitcher } from "@/features/LangSwitcher";


interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.text, {}, [className])}>
            <p className={cls.text}>{t("testHandsontable")}</p>
            <LangSwitcher />
            {/* <Counter /> */}
        </div>
    );
};

export default MainPage;
