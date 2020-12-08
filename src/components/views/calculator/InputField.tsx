import React from "react";
import InputText from "../../common/InputText";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentInput, evaluate} from "../../../store/session/actions";
import {RootState} from "../../../store";
import {useTranslation} from "react-i18next";
import useTheme from "../../../hooks/useTheme";

const InputField = React.forwardRef((props, forwardedRef) => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.session.currentInput);
    const interfaceLanguage = useSelector((state: RootState) => state.settings.interfaceSettings.language);
    const mathLanguage = useSelector((state: RootState) => state.settings.mathSettings.numberFormat);
    const significantDigits = useSelector((state: RootState) => state.settings.mathSettings.significantDigits);
    const [t] = useTranslation();
    const theme = useTheme();

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCurrentInput(event.target.value));
    };

    const keypressInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter")
            dispatch(evaluate(
                mathLanguage === "inherit" ? interfaceLanguage : mathLanguage,
                significantDigits
            ));
    }

    // @ts-ignore
    return (<InputText ref={forwardedRef}
        type="text"
        {...theme}
        placeholder={t("common.input")}
        onChange={changeInput}
        onKeyPress={keypressInput}
        value={value}
    />);
});

export default InputField;