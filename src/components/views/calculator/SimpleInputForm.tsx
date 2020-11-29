import React from "react";
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

    return (
        <Container>
            <InputField/>
            <StyledOutputField
                readOnly={true}
                placeholder={"output"}
                value={lastOutput}
            />
        </Container>
    )
}

export default SimpleInputForm;