import React from "react";
import Sidebar from "../../../common/Sidebar";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {clearCurrentInput, clearMathHistory, clearMathUserScope} from "../../../../store/session/actions";
import {RootState} from "../../../../store";
import useAnalyticsEvent from "../../../../hooks/useAnalyticsEvent";

const CalculatorSidebar: React.FC = () => {
    const dispatch = useDispatch();
    const [t] = useTranslation();
    const inputForm = useSelector((state: RootState) => state.settings.interfaceSettings.inputForm);
    const analyticsEvent = useAnalyticsEvent();

    const clearAll = () => {
        dispatch(clearMathHistory());
        dispatch(clearCurrentInput());
        dispatch(clearMathUserScope());
        analyticsEvent("calculator.common.sidebar", "clear_all");
    };

    const clearHistory = () => {
        dispatch(clearMathHistory());
        analyticsEvent("calculator.common.sidebar", "clear_history");
    }

    const clearInput = () => {
        dispatch(clearCurrentInput());
        analyticsEvent("calculator.common.sidebar", "clear_input");
    }

    const clearUserScope = () => {
        dispatch(clearMathUserScope());
        analyticsEvent("calculator.common.sidebar", "clear_user_scope");
    }

    return (
        <Sidebar>
            <button
                onClick={clearHistory}
                aria-label={t(inputForm !== "simple" ? "calculator.clear_history" : "calculator.clear_output")}
            >
                {t(inputForm !== "simple" ? "calculator.clear_history" : "calculator.clear_output")}
            </button>
            <button
                onClick={clearInput}
                aria-label={t("calculator.clear_input")}
            >
                {t("calculator.clear_input")}
            </button>
            <button
                onClick={clearUserScope}
                aria-label={t("calculator.clear_memory")}
            >
                {t("calculator.clear_memory")}
            </button>
            <button
                onClick={clearAll}
                aria-label={t("calculator.clear_all")}
            >
                {t("calculator.clear_all")}
            </button>
            {/*<button disabled={true} style={{marginTop:"auto"}}>New Document</button>
            <button disabled={true}>Save Document</button>
            <button disabled={true}>Load Document</button>*/}
        </Sidebar>
    );
}

export default CalculatorSidebar;