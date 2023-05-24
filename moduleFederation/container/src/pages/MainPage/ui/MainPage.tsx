import { useTranslation } from "react-i18next";
import { Suspense, lazy } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Counter } from "@/entities/Counter";

import cls from "./MainPage.module.scss";


const CounterAppOne = lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = lazy(() => import("app2/CounterAppTwo"));

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
            <Suspense fallback={<p>Loading...</p>}>
                <CounterAppOne />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <CounterAppTwo />
            </Suspense>
        </div>
    );
};

export default MainPage;
