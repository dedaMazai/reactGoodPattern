import React from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

export const useCopyToClipboard = (): [CopiedValue, CopyFn, boolean] => {
    const [copiedText, setCopiedText] = React.useState<CopiedValue>(null);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const { t } = useTranslation();

    React.useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setIsSuccess(false);
            }, 800);
        }
    }, [isSuccess]);

    const copy: CopyFn = React.useCallback(async (text) => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported');
            return false;
        }

        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            setIsSuccess(true);
            toast.success(t('Copied!'));
            return true;
        } catch (error) {
            console.warn('Copy failed', error);
            setCopiedText(null);
            setIsSuccess(false);
            return false;
        }
    }, [t]);

    return [copiedText, copy, isSuccess];
};
