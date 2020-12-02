import React from "react";
import Sidebar from "../../common/Sidebar";
import {useTranslation} from "react-i18next";

const CalculatorSidebar: React.FC = () => {
    const [t] = useTranslation();

    return (
        <Sidebar>
            <button>{t("calculator.clear_history")}</button>
            <button>{t("calculator.clear_input")}</button>
            <button>{t("calculator.clear_memory")}</button>
            <button>{t("calculator.clear_all")}</button>
            {/*<button disabled={true} style={{marginTop:"auto"}}>New Document</button>
            <button disabled={true}>Save Document</button>
            <button disabled={true}>Load Document</button>*/}
        </Sidebar>
    );
}

export default CalculatorSidebar;