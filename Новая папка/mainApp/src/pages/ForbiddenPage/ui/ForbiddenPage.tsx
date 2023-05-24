import { useTranslation } from "react-i18next";

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t("You have not available this page")}
        </div>
    );
};

export default ForbiddenPage;
