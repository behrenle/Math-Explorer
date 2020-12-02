import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import InputField from "./InputField";
import Card from "../../common/Card";
import {useTranslation} from "react-i18next";

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
    grid-gap: 20px;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const MathHistoryItemLineCounter = styled.div`
    grid-row: span 2;
    opacity: 0.4;
    user-select: none;
`;

const MathHistoryItemLabel = styled.div`
    text-align: right;
    font-weight: 300;
    font-size: 20pt;
    align-self: center;
`;

interface MathHistoryItemProps {
    index: number,
    input: string,
    output: string
}

const MathHistoryItem: React.FC<MathHistoryItemProps> = ({index,input, output}) => {
    const [t] = useTranslation();

    return (
        <MathHistoryItemContainer>
            <MathHistoryItemLineCounter>
                #{index + 1}
            </MathHistoryItemLineCounter>
            <MathHistoryItemLabel>{t("common.input")}</MathHistoryItemLabel>
            <span> {input}</span>
            <MathHistoryItemLabel>{t("common.output")}</MathHistoryItemLabel>
            <span> {output}</span>
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

    return (
        <Container>
            <MathHistory items={mathHistory.map((item, i) => {return {...item, index: i}})}/>
            <InputField/>
        </Container>
    )
}

export default AdvancedInputForm;