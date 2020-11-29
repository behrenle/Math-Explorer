import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {RootState} from "../../../store";
import {useSelector} from "react-redux";
import InputText from "../../common/InputText";
import InputField from "./InputField";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const StyledOutputField = styled(InputText)`
    margin-top: 20px;
`;

const SimpleInputForm: React.FC = () => {
    const lastOutput: string = useSelector((state: RootState) => state.session.mathHistory.length < 1
        ? "" : state.session.mathHistory[state.session.mathHistory.length - 1].output
    );
    const outputRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (outputRef.current && lastOutput !== null && lastOutput !== "") {
            outputRef.current.focus();
            outputRef.current.select();
        }
    }, [lastOutput]);

    const outputOnKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && inputRef.current)
            inputRef.current.focus();
    }

    return (
        <Container>
            <InputField ref={inputRef}/>
            <StyledOutputField
                readOnly={true}
                placeholder={"output"}
                value={lastOutput}
                ref={outputRef}
                onKeyPress={outputOnKeyPress}
            />
        </Container>
    )
}

export default SimpleInputForm;