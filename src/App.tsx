import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import { useTranslation } from "react-i18next";
import { SwitchLanguage } from "./SwitchLanguage";

function App() {
  const { t } = useTranslation();

  return (
    <div className="p-5 max-w-sm mx-auto space-x-4">
      <SwitchLanguage />
      <img src={logo} className="h-80 w-80" alt="logo" />
      <Counter />
      <p>
        {t("users", {
          date: new Date(),
          count: 1_000_000,
          revenue: 1_000_000_000.95,
        })}
      </p>
    </div>
  );
}

export default App;
