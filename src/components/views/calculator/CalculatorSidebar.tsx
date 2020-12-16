import React from "react";
import Sidebar from "../../common/Sidebar";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {clearCurrentInput, clearMathHistory, clearMathUserScope} from "../../../store/session/actions";
import {RootState} from "../../../store";

const CalculatorSidebar: React.FC = () => {
    const dispatch = useDispatch();
    const [t] = useTranslation();
    const advancedInputMode = useSelector((state: RootState) => state.settings.interfaceSettings.advancedInputMode);

    const clearAll = () => {
        dispatch(clearMathHistory());
        dispatch(clearCurrentInput());
        dispatch(clearMathUserScope());
    };

    return (
        <Sidebar>
            <button
                onClick={() => dispatch(clearMathHistory())}
                aria-label={t(advancedInputMode ? "calculator.clear_history" : "calculator.clear_output")}
            >
                {t(advancedInputMode ? "calculator.clear_history" : "calculator.clear_output")}
            </button>
            <button
                onClick={() => dispatch(clearCurrentInput())}
                aria-label={t("calculator.clear_input")}
            >
                {t("calculator.clear_input")}
            </button>
            <button
                onClick={() => dispatch(clearMathUserScope())}
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