import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px 20px;
    font-size: 28pt;
    display: flex;
`;

const Label = styled.label`
    
`;

const Select = styled.select`
    font-size: inherit;
    margin-left: auto;
    min-width: 250px;
`;

interface OptionProps {
    label: string,
    value: any
}

interface Props {
    label: string,
    options: OptionProps[],
    value: any,
    setter: (value: any) => void
}

const SettingsItem: React.FC<Props> = ({label, options, value, setter}) => {
    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setter(event.target.value);
    }

    return (
        <Container>
            <Label>{label}</Label>
            <Select value={value} onChange={changeHandler}>
                {options.map((option, index) => (
                    <option value={option.value} key={index}>{option.label}</option>
                ))}
            </Select>
        </Container>
    );
};

export default SettingsItem;