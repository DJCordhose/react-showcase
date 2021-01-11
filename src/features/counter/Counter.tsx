import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  loadFromServer,
  selectCount,
  selectInProgress,
} from "./counterSlice";

import { useTranslation } from "react-i18next";
import { AriaButton } from "../../AriaButton";

export function Counter() {
  const count = useSelector(selectCount);
  const inProgress = useSelector(selectInProgress);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex justify-between border-gray-900 border-2 m-2 overflow-hidden">
        <AriaButton
          testid="count:increment"
          label="Increment value"
          text="+"
          onClick={() => dispatch(increment())}
        />
        <span
          data-testid="count:value"
          className="px-5 py-2 border-gray-900 border-2  m-2"
          aria-label="Value"
          role="presentation"
        >
          {count}
        </span>
        <AriaButton
          testid="count:decrement"
          label="Decrement value"
          text="-"
          onClick={() => dispatch(decrement())}
        />
      </div>
      <div className="flex justify-between border-gray-900 border-2 m-2">
        <input
          className="px-2 py-2 m-2 w-20"
          aria-label="Set increment amount"
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number.parseInt(e.target.value))}
        />
        <AriaButton
          testid="count:incrementByAmount"
          label={t("add", { mode: "sync" })}
          text={t("add", { mode: "sync" })}
          onClick={() => dispatch(incrementByAmount(incrementAmount ?? 0))}
        />
        <AriaButton
          testid="count:incrementByAmountAsync"
          label={t("add", { mode: "async" })}
          text={t("add", { mode: "async" })}
          onClick={() => dispatch(incrementAsync(incrementAmount ?? 0))}
          inProgress={inProgress['ADD_ASYNC']}
        />
      </div>
      <div className="flex justify-center border-gray-900 border-2 m-2">
        <AriaButton
          testid="count:load"
          label={t("load")}
          text={t("load")}
          flat={true}
          onClick={() => dispatch(loadFromServer())}
          inProgress={inProgress['LOAD']}
        />
      </div>
    </div>
  );
}
