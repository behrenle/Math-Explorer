import React, { useRef } from "react";
import styled from "styled-components";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import InputText from "../../../common/InputText";
import InputField from "../common/InputField";
import { useTranslation } from "react-i18next";
import { focusInput, focusOutput } from "../../../../hotkeys.json";
import useHotkeyRef from "../../../../hooks/useHotkeyRef";
import useRefEffect from "../../../../hooks/useRefEffect";
import { getLastOutput } from "../common/utils";
import InputFormWithSidebar from "./InputFormWithSidebar";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledOutputField = styled(InputText)`
  margin-top: 20px;
`;

const SimpleInputForm: React.FC = () => {
  const lastOutput = getLastOutput(
    useSelector((state: RootState) => state.session.document.cells)
  );
  const outputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [t] = useTranslation();
  useRefEffect(
    outputRef,
    (r) => {
      r.current.focus();
      r.current.select();
    },
    [lastOutput]
  );
  useRefEffect(inputRef, (r) => r.current.focus());
  useHotkeyRef(focusInput, inputRef, (r) => r.current.focus());
  useHotkeyRef(focusOutput, outputRef, (r) => r.current.focus());

  const outputOnKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputRef.current) inputRef.current.focus();
  };

  return (
    <InputFormWithSidebar>
      <Container>
        <InputField ref={inputRef} aria-label={t("common.input")} />
        <StyledOutputField
          aria-label={t("common.output")}
          type="text"
          readOnly={true}
          placeholder={t("common.output")}
          value={lastOutput}
          ref={outputRef}
          onKeyPress={outputOnKeyPress}
        />
      </Container>
    </InputFormWithSidebar>
  );
};

export default SimpleInputForm;
