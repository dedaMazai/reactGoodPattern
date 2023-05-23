import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    // для тестирования ErrorPage
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button onClick={onThrow}>
            {t('Throw Error')}
        </button>
    );
};
