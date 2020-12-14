import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

import { useTranslation } from 'react-i18next';
import { AriaButton } from './AriaButton';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);
  const { t } = useTranslation();
  
  return (
    <div>
      <div className={styles.row}>
        <AriaButton testid='count:increment' label="Increment value" text='+' onClick={() => dispatch(increment())} />
        <span 
          data-testid='count:value'
          className={styles.value}
          aria-label="Value"
          role="presentation"
          >{count}</span>
        <AriaButton testid='count:decrement' label="Decrement value" text='-' onClick={() => dispatch(decrement())} />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          type="number"
          value={incrementAmount}
          onChange={e => setIncrementAmount(Number.parseInt(e.target.value))}
        />
        <AriaButton testid='count:incrementByAmount' label={t('add', { mode: 'sync'})} text={t('add', { mode: 'sync'})} onClick={() => dispatch(incrementByAmount(incrementAmount ?? 0))} />
        <AriaButton testid='count:incrementByAmountAsync' label={t('add', { mode: 'async'})} text={t('add', { mode: 'async'})} onClick={() => dispatch(incrementAsync(incrementAmount ?? 0))} isAsync={true}/>
      </div>
    </div>
  );
}
