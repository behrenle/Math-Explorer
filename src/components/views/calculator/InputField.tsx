import React, {useState} from "react";
import InputText from "../../common/InputText";
import {useDispatch, useSelector} from "react-redux";
import {evaluate} from "../../../store/session/actions";
import {RootState} from "../../../store";
import {useTranslation} from "react-i18next";

const InputField = React.forwardRef((props, forwardedRef) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const interfaceLanguage = useSelector((state: RootState) => state.settings.interfaceSettings.language);
    const mathLanguage = useSelector((state: RootState) => state.settings.mathSettings.numberFormat);
    const significantDigits = useSelector((state: RootState) => state.settings.mathSettings.significantDigits);
    const [t] = useTranslation();

    const evaluateInput = () => dispatch(evaluate(
        value,
        mathLanguage === "inherit" ? interfaceLanguage : mathLanguage,
        significantDigits
    ));

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const keypressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter")
            evaluateInput();
    }

    // @ts-ignore
    return (<InputText placeholder={t("common.input")} onChange={changeInput} onKeyPress={keypressInput} ref={forwardedRef}/>);
});

export default InputField;