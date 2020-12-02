import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import InputField from "./InputField";
import Card from "../../common/Card";
import {useTranslation} from "react-i18next";
import {useHotkeys} from "react-hotkeys-hook";
import {focusInput} from "../../../hotkeys.json";
import {changeCurrentInput} from "../../../store/session/actions";

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

const MathHistoryItemContainer = styled.div`
    display: grid;
    grid-template-columns: 80px auto 1fr;
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

const MathHistoryItemValue = styled.span<{copyable: boolean}>`
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

const MathHistoryItem: React.FC<MathHistoryItemProps> = ({index,input, output}) => {
    const [t] = useTranslation();
    const copyOnClick = useSelector((state: RootState) => state.settings.interfaceSettings.copyOnClick);
    const dispatch = useDispatch();

    const onClick = (type: "input" | "output") => {
        if (copyOnClick)
            dispatch(changeCurrentInput(type === "input"
                ? input
                : output
            ));
    };

    return (
        <MathHistoryItemContainer>
            <MathHistoryItemLineCounter>
                #{index + 1}
            </MathHistoryItemLineCounter>
            <MathHistoryItemLabel>{t("common.input")}</MathHistoryItemLabel>
            <MathHistoryItemValue copyable={copyOnClick} onClick={() => onClick("input")}> {input}</MathHistoryItemValue>
            <MathHistoryItemLabel>{t("common.output")}</MathHistoryItemLabel>
            <MathHistoryItemValue copyable={copyOnClick} onClick={() => onClick("output")}> {output}</MathHistoryItemValue>
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
    const mathHistory = useSelector((state: RootState) => state.session.mathHistory);
    const inputRef = useRef<HTMLInputElement>(null);
    useHotkeys(focusInput, () => {
        if (inputRef.current)
            inputRef.current.focus();
    }, {filter: () => true}, []);

    return (
        <Container>
            <MathHistory items={mathHistory.map((item, i) => {return {...item, index: i}})}/>
            <InputField ref={inputRef}/>
        </Container>
    )
}

export default AdvancedInputForm;