import React from "react";
import { useTranslation } from "react-i18next";

function Hello() {
  const { t } = useTranslation();

  return (
    <div id='hello-app' className="p-6 max-w-sm mx-auto space-x-5">
      <p>
        {t("hello")}
      </p>
    </div>
  );
}

export default Hello;
