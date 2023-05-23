import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Counter } from '@/entities/Counter';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <p>{t('test')}</p>
            <Counter />
        </div>
    );
};

export default MainPage;
