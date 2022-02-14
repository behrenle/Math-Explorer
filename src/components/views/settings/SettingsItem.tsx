import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.li`
  padding: 10px 20px;
  font-size: 28pt;
  display: flex;
`;

const Label = styled.label``;

const Select = styled.select`
  font-size: ${(props) => props.theme.fontSize.m};
  color: inherit;
  background-color: inherit;
  margin-left: auto;
  min-width: 250px;

  & > option {
    color: initial;
    background-color: initial;
  }
`;

interface OptionProps {
  label: string;
  value: any;
}

interface Props {
  label: string;
  options: OptionProps[];
  value: any;
  setter: (value: any) => void;
}

const SettingsItem: React.FC<Props> = ({ label, options, value, setter }) => {
  const [t] = useTranslation();

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setter(event.target.value);
  };

  return (
    <Container>
      <Label id={label}>{t(label)}</Label>
      <Select value={value} onChange={changeHandler} aria-labelledby={label}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default SettingsItem;
