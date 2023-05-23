import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Language from '@/shared/assets/icons/Language.svg';
import { Icon } from '@/shared/ui/Icon/Icon';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string,
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <button
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            <Icon Svg={Language} className={cls.img} inverted />
        </button>
    );
};
