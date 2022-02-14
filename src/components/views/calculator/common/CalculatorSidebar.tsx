import React from "react";
import Sidebar from "../../../common/Sidebar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentInput,
  clearDocument,
  clearMathUserScope,
} from "../../../../store/session/actions";
import { RootState } from "../../../../store";

const CalculatorSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const inputForm = useSelector(
    (state: RootState) => state.settings.interfaceSettings.inputForm
  );

  const clearAll = () => {
    dispatch(clearDocument());
    dispatch(clearCurrentInput());
    dispatch(clearMathUserScope());
  };

  const clearHistory = () => {
    console.log("triggered clear history");
    dispatch(clearDocument());
  };

  const clearInput = () => {
    dispatch(clearCurrentInput());
  };

  const clearUserScope = () => {
    dispatch(clearMathUserScope());
  };

  return (
    <Sidebar>
      <button
        onClick={clearHistory}
        aria-label={t(
          inputForm !== "simple"
            ? "calculator.clear_history"
            : "calculator.clear_output"
        )}
      >
        {t(
          inputForm !== "simple"
            ? "calculator.clear_history"
            : "calculator.clear_output"
        )}
      </button>
      <button onClick={clearInput} aria-label={t("calculator.clear_input")}>
        {t("calculator.clear_input")}
      </button>
      <button
        onClick={clearUserScope}
        aria-label={t("calculator.clear_memory")}
      >
        {t("calculator.clear_memory")}
      </button>
      <button onClick={clearAll} aria-label={t("calculator.clear_all")}>
        {t("calculator.clear_all")}
      </button>
    </Sidebar>
  );
};

export default CalculatorSidebar;
