import React from "react";
import Sidebar from "../../common/Sidebar";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {clearCurrentInput, clearMathHistory, clearMathUserScope} from "../../../store/session/actions";

const CalculatorSidebar: React.FC = () => {
    const dispatch = useDispatch();
    const [t] = useTranslation();

    const clearAll = () => {
        dispatch(clearMathHistory());
        dispatch(clearCurrentInput());
        dispatch(clearMathUserScope());
    };

    return (
        <Sidebar>
            <button onClick={() => dispatch(clearMathHistory())}>
                {t("calculator.clear_history")}
            </button>
            <button onClick={() => dispatch(clearCurrentInput())}>
                {t("calculator.clear_input")}
            </button>
            <button onClick={() => dispatch(clearMathUserScope())}>
                {t("calculator.clear_memory")}
            </button>
            <button onClick={clearAll}>
                {t("calculator.clear_all")}
            </button>
            {/*<button disabled={true} style={{marginTop:"auto"}}>New Document</button>
            <button disabled={true}>Save Document</button>
            <button disabled={true}>Load Document</button>*/}
        </Sidebar>
    );
}

export default CalculatorSidebar;