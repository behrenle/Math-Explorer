import React from "react";
import SimpleInputForm from "./inputforms/SimpleInputForm";
import AdvancedInputForm from "./inputforms/AdvancedInputForm";
import DocumentInputForm from "./inputforms/document/DocumentInputForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {clearAll, clearInput, clearMemory, clearOutput, copyInputAndOutput} from "../../../hotkeys.json";
import {clearCurrentInput, clearDocument, clearMathUserScope} from "../../../store/session/actions";
import useHotkeyDispatch, {hotkeyOptions} from "../../../hooks/useHotkeyDispatch";
import {useHotkeys} from "react-hotkeys-hook";
import {useTranslation} from "react-i18next";
import {InputForm} from "../../../store/settings/types";
import usePageView from "../../../hooks/usePageView";
import useAnalyticsEvent from "../../../hooks/useAnalyticsEvent";
import useSession from "../../../hooks/useSession";

const getOutput = (state: RootState) => {
    const lastCell = state.session.document.cells.slice(-1)[0];
    if (lastCell) {
        return lastCell.type === "MATH" ? lastCell.output : lastCell.content;
    }
    return "";
}

const selectInputForm = (inputForm: InputForm, overwriteDocumentInputMode: boolean) => {
    if (overwriteDocumentInputMode)
        return <DocumentInputForm/>;

    switch (inputForm) {
        case "advanced":
            return <AdvancedInputForm/>;
        case "simple":
            return <SimpleInputForm/>;
        case "document":
            return <DocumentInputForm/>;
    }
}

const Calculator: React.FC = () => {
    usePageView("/calculator");
    const analyticsEvent = useAnalyticsEvent();
    const inputForm = useSelector((state: RootState) => state.settings.interfaceSettings.inputForm);
    const [t] = useTranslation();
    const session = useSession();
    const [currentInput, currentOutput] = useSelector((state: RootState) => [state.session.currentInput, getOutput(state)]);
    useHotkeyDispatch(clearInput, clearCurrentInput());
    useHotkeyDispatch(clearOutput, clearDocument());
    useHotkeyDispatch(clearMemory, clearMathUserScope());
    useHotkeyDispatch(clearAll, [clearCurrentInput(), clearDocument(), clearMathUserScope()]);
    useHotkeys(copyInputAndOutput, () => {
        navigator.clipboard.writeText(`${t("common.input")}: ${currentInput}\n${t("common.output")}: ${currentOutput}`).catch(console.error);
    }, hotkeyOptions, [currentInput, currentOutput]);
    analyticsEvent("InputForm", inputForm);

    return (
        <>
            {selectInputForm(inputForm, session.temporaryEnableDocumentMode)}
        </>
    );
};

export default Calculator;