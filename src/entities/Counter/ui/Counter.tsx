import { useTranslation } from 'react-i18next';
import { useCounterValue } from '../model/selectors/getCounter';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { decrement, increment, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1>{counterValue}</h1>
            <button
                onClick={handleAddFive}
            >
                {t('add5')}
            </button>
            <button
                onClick={handleInc}
            >
                {t('increment')}
            </button>
            <button
                onClick={handleDec}
            >
                {t('decrement')}
            </button>
        </div>
    );
};
