import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          {i18n.language !== "de" && (
            <button onClick={() => i18n.changeLanguage("de")}>{t("de")}</button>
          )}
          {i18n.language !== "en" && (
            <button onClick={() => i18n.changeLanguage("en")}>{t("en")}</button>
          )}
        </p>
        <p>{t("users", {
          date: new Date(),
          count: 1_000_000,
          revenue: 1_000_000_000.95
        })}</p>
      </header>
    </div>
  );
}

export default App;
