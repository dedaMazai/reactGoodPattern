import { useTranslation } from 'react-i18next';

export const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('You have not available this page')}
        </div>
    );
};
