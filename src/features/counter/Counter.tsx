import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  loadFromServer,
  selectCount,
  selectInProgress,
} from "./counterSlice";

import { useTranslation } from "react-i18next";
import { AriaButton } from "../../AriaButton";
import { IncrementByAmount } from "./IncrementByAmount";
import { FlexContainer } from "../../FlexContainer";

export function Counter() {
  const count = useSelector(selectCount);
  const inProgress = useSelector(selectInProgress);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div>
      <FlexContainer>
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
      </FlexContainer>
      <IncrementByAmount />
      <FlexContainer center={true}>
        <AriaButton
          testid="count:load"
          label={t("load")}
          text={t("load")}
          flat={true}
          onClick={() => dispatch(loadFromServer())}
          inProgress={inProgress['LOAD']}
        />
      </FlexContainer>
    </div>
  );
}
