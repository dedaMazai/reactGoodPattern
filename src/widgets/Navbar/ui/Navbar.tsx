import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserView, isBrowser } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginButtonGroup } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ProfileDropdown } from '@/features/profileDropdown';
import { TwoFAModalConfirm } from '@/features/TwoFAConfirm';
import { getShowFormTwoFA } from '@/features/TwoFAConfirm/modal/selectors/getTwoFAForm';
import { twoFAActions } from '@/features/TwoFAConfirm/modal/slice/twoFASlice';
import { CourseInformation } from '@/features/CourseInformation';
import { BalanceInformationNavbar } from '@/entities/BalanceInformationNavbar';
import { Icon } from '@/shared/ui/Icon/Icon';
import { CurrencyInfo } from '@/entities/CurrencyInfo';
import { useGetStatsQuery } from '@/widgets/UserStat';
import { Utils } from '@/shared/lib/utils/utils';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const showFormTwoFA = useSelector(getShowFormTwoFA);

    const { data: stats, isLoading: statsLoading } = useGetStatsQuery({});

    const onCloseModalTwoFA = useCallback(() => {
        dispatch(twoFAActions.setShowForm(false));
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack gap="8">
                    <AppLink
                        hovered
                        to={RoutePath.main}
                    >
                        <HStack gap="8">
                            <Text
                                className={classNames('', { [cls.appName]: isBrowser })}
                                title={t('Dertet')}
                                size={TextSize.L}
                                weight="bold"
                                theme={TextTheme.PRIMARY}
                            />
                        </HStack>
                    </AppLink>
                    <HStack align="start" gap="16">
                        <VStack className={classNames(cls.curses, {}, [cls.rightLine])}>
                            <CourseInformation
                                name={t('BUY')}
                                currency="USDT"
                                tokenFrom="RUB"
                                tokenTo="USDT"
                                type="buy"
                            />
                            <CourseInformation
                                name={t('SELL')}
                                currency="USDT"
                                tokenFrom="RUB"
                                tokenTo="USDT"
                                type="sell"
                            />
                        </VStack>
                        <BalanceInformationNavbar className={cls.rightLineBalance} />
                        <VStack className={cls.displayHide}>
                            <CurrencyInfo
                                name={t('Turnover in')}
                                value={Utils.formatNumber(stats?.result.in_turnover, 2)}
                                currency="USDT"
                            />
                            <CurrencyInfo
                                name={t('Turnover out')}
                                value={Utils.formatNumber(stats?.result.out_turnover, 2)}
                                currency="USDT"
                            />
                        </VStack>
                    </HStack>
                </HStack>
                <HStack align="center" gap="16" className={cls.actions}>
                    <BrowserView>
                        <div className={cls.blockLinks}>
                            <AppLink
                                className={cls.createLink}
                                to={RoutePath.appeals}
                                theme={AppLinkTheme.PRIMARY}
                            >
                                {t('Appeals')}
                            </AppLink>
                            <AppLink
                                className={cls.createLink}
                                to={RoutePath.allOrders}
                                theme={AppLinkTheme.PRIMARY}
                            >
                                {t('All orders')}
                            </AppLink>
                        </div>
                    </BrowserView>
                    <NotificationButton className={cls.Notification} />
                    <LangSwitcher />
                    <ProfileDropdown />
                </HStack>
                {showFormTwoFA && (
                    <TwoFAModalConfirm
                        onClose={onCloseModalTwoFA}
                        isOpen={showFormTwoFA}
                    />
                )}
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLink
                hovered
                to={RoutePath.main}
            >
                <HStack gap="8">
                    <Icon Svg={DesdaIcon} className={classNames(cls.logo, {}, [cls.little])} />
                    <Text
                        className={cls.appNameLittle}
                        title={t('FGSgdsgs')}
                        size={TextSize.L}
                        weight="bold"
                        theme={TextTheme.PRIMARY}
                    />
                </HStack>
            </AppLink>
            <HStack className={cls.actions} gap="16">
                <LangSwitcher className={cls.displayNone} />
                <LoginButtonGroup idBlock="Navbar" />
            </HStack>
        </header>
    );
});
