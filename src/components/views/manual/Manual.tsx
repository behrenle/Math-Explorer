import React, {useState} from "react";
import styled from "styled-components";
import ManualCategory from "./ManualCategory";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import InputText from "../../common/InputText";

// @ts-ignore
import nd from "@behrenle/number-drive"

const Container = styled.div`
    padding: 20px 15%;
`;

const Manual: React.FC = () => {
    const [filter, setFilter] = useState("");
    const language = useSelector((state: RootState) => state.settings.interfaceSettings.language);

    return (
        <Container>
            <InputText
                style={{marginBottom: "20px"}}
                placeholder="search"
                value={filter}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}
            />
            <ManualCategory language={language} items={nd.Manual.constants} filter={filter}/>
            <ManualCategory language={language} items={nd.Manual.functions} filter={filter}/>
        </Container>
    )
}

export default Manual