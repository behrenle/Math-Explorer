import React, {useState} from "react";
import InputText from "../../common/InputText";
import {useDispatch, useSelector} from "react-redux";
import {evaluate} from "../../../store/session/actions";
import {RootState} from "../../../store";

const InputField: React.FC = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const interfaceLanguage = useSelector((state: RootState) => state.settings.interfaceSettings.language);
    const mathLanguage = useSelector((state: RootState) => state.settings.mathSettings.numberFormat);
    const significantDigits = useSelector((state: RootState) => state.settings.mathSettings.significantDigits);

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

    return (
        <InputText
            placeholder="input"
            onChange={changeInput}
            onKeyPress={keypressInput}
        />
    )
}

export default InputField;