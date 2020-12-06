import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {RootState} from "../../../store/index";
import {changeCurrentInput} from "../../../store/session/actions";

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 7fr;
    padding: 10px 20px;
    grid-gap: 20px;
    
    &:hover {
        outline: 2px solid black;
    }
`;

const Synopsis = styled.div<{copyable: boolean}>`
    ${props => props.copyable ? `&:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }` : null}
`;

const Description = styled.div``;

interface Props {
    synopsis: string,
    description: string,
    copyOnClick: boolean
}

const ManualItem: React.FC<Props> = ({synopsis, description, copyOnClick}) => {
    const copyManualContentOnClick = useSelector((state: RootState) => state.settings.interfaceSettings.copyManualContentOnClick);
    const dispatch = useDispatch();
    const history = useHistory();
    const copyable = copyOnClick && copyManualContentOnClick;

    const synopsisOnClick = () => {
        console.log("clicked")
        if (copyable) {
            dispatch(changeCurrentInput(synopsis));
            history.push("/");
        }
    }

    return (
        <Container>
            <Synopsis onClick={synopsisOnClick} copyable={copyable}>
                {synopsis}
            </Synopsis>
            <Description>
                {description}
            </Description>
        </Container>
    )
}

export default ManualItem;