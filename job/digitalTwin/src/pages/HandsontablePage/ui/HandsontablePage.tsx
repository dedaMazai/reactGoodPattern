import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LangSwitcher } from "@/features/LangSwitcher";

import cls from "./HandsontablePage.module.scss";


interface HandsontablePageProps {
    className?: string
}

const HandsontablePage = (props: HandsontablePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.text, {}, [className])}>
            <p className={cls.text}>{t("testHandsontable")}</p>
            <LangSwitcher />
        </div>
    );
};

export default HandsontablePage;
