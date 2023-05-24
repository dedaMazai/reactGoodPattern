import { useTranslation } from "react-i18next";
import { Suspense, lazy } from "react";
// @ts-ignore
// import SecondAPP from "pdp/SecondAPP";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Counter } from "@/entities/Counter";

import cls from "./MainPage.module.scss";

// @ts-ignores
const SecondAPP = lazy(() => import("pdp/SecondAPP").catch((error) => console.error(error)));

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <p>{t("test")}</p>
            <Counter />
            {/* <SecondAPP /> */}
            <Suspense fallback={<p>Loading...</p>}>
                <SecondAPP />
            </Suspense>
        </div>
    );
};

export default MainPage;
