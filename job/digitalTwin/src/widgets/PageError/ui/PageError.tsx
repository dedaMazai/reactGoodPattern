import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t("The unknown problem")}</p>
            <button onClick={reloadPage} type="button">
                {t("Refresh site")}
            </button>
        </div>
    );
};
