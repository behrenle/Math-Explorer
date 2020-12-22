import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import InputField from "../common/InputField";
import Card from "../../../common/Card";
import {useTranslation} from "react-i18next";
import {useHotkeys} from "react-hotkeys-hook";
import {focusInput} from "../../../../hotkeys.json";
import {changeCurrentInput} from "../../../../store/session/actions";
import useRefEffect from "../../../../hooks/useRefEffect";
import {getMathCells} from "../common/utils";
import InputFormWithSidebar from "./InputFormWithSidebar";

const Container = styled.div`
  padding: 20px;
  display: grid;
  overflow: hidden;
  grid-template-rows: 1fr auto;
  grid-gap: 20px;
`;

const MathHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MathHistoryContainerWrapper = styled(Card)`
  overflow-y: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MathHistoryItemContainer = styled.div<{ showCellNumbers: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.showCellNumbers ? "80px auto 1fr" : "auto 1fr"};
  grid-template-rows: auto auto;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const MathHistoryItemLineCounter = styled.div`
  grid-row: span 2;
  opacity: 0.4;
  user-select: none;
  padding: 10px
`;

const MathHistoryItemLabel = styled.div`
  text-align: right;
  font-weight: 300;
  font-size: 20pt;
  align-self: center;
  padding: 0 10px;
`;

const MathHistoryItemValue = styled.span<{ copyable: boolean }>`
  padding: 10px;
  ${
          props => props.copyable ? "&:hover { background-color: rgba(0, 0, 0, 0.1); }" : null
  }
`;

interface MathHistoryItemProps {
    index: number,
    input: string,
    output: string
}

const MathHistoryItem: React.FC<MathHistoryItemProps> = ({index, input, output}) => {
    const [t] = useTranslation();
    const copyOnClick = useSelector((state: RootState) => state.settings.interfaceSettings.copyCellContentOnClick);
    const showCellNumbers = useSelector((state: RootState) => state.settings.interfaceSettings.showLineNumbers);
    const language = useSelector((state: RootState) => state.settings.interfaceSettings.language);
    const cellLanguageTag = useSelector((state: RootState) => state.settings.interfaceSettings.cellLanguageTag);
    const dispatch = useDispatch();

    const languageTag = cellLanguageTag === "inherit" ? language : cellLanguageTag;

    const onClick = (type: "input" | "output") => {
        if (copyOnClick)
            dispatch(changeCurrentInput(type === "input"
                ? input
                : output
            ));
    };

    return (
        <MathHistoryItemContainer showCellNumbers={showCellNumbers}>
            {showCellNumbers ? <MathHistoryItemLineCounter>#{index + 1}</MathHistoryItemLineCounter> : null}
            <MathHistoryItemLabel>{t("common.input")}</MathHistoryItemLabel>
            <MathHistoryItemValue
                lang={languageTag}
                copyable={copyOnClick}
                onClick={() => onClick("input")}
            > {input}</MathHistoryItemValue>
            <MathHistoryItemLabel>{t("common.output")}</MathHistoryItemLabel>
            <MathHistoryItemValue
                lang={languageTag}
                copyable={copyOnClick}
                onClick={() => onClick("output")}
            > {output}</MathHistoryItemValue>
        </MathHistoryItemContainer>
    );
}

const MathHistory: React.FC<{ items: MathHistoryItemProps[] }> = ({items}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current)
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [items])

    return (
        <MathHistoryContainerWrapper ref={containerRef}>
            <MathHistoryContainer>
                {
                    items.map(item => <MathHistoryItem
                        key={item.index}
                        index={item.index}
                        input={item.input}
                        output={item.output}
                    />)
                }
            </MathHistoryContainer>
        </MathHistoryContainerWrapper>
    )
}

const AdvancedInputForm: React.FC = () => {
    const mathHistory = getMathCells(useSelector((state: RootState) => state.session.document.cells));
    const inputRef = useRef<HTMLInputElement>(null);
    const [t] = useTranslation();
    useHotkeys(focusInput, () => {
        if (inputRef.current)
            inputRef.current.focus();
    }, {filter: () => true}, []);
    useRefEffect(inputRef, (r) => r.current.focus(), []);

    return (
        <InputFormWithSidebar>
            <Container>
                <MathHistory items={mathHistory.map((item, i) => ({...item, index: i}))}/>
                <InputField ref={inputRef} aria-label={t("common.input")}/>
            </Container>
        </InputFormWithSidebar>
    );
};

export default AdvancedInputForm;