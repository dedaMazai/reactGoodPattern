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
            <h1 data-testid="value-title">{counterValue}</h1>
            <button
                onClick={handleAddFive}
                data-testid="increment-btn5"
            >
                {t('add5')}
            </button>
            <button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </button>
            <button
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                {t('decrement')}
            </button>
        </div>
    );
};
