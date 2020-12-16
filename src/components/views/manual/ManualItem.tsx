import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {RootState} from "../../../store";
import {changeCurrentInput} from "../../../store/session/actions";

const Synopsis = styled.dt<{copyable: boolean}>`
    padding: 10px;
    margin: 0;
    ${props => props.copyable ? `&:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }` : null}
`;

const Description = styled.dd`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px;
    margin: 0;
`;

interface Props {
    synopsis: string,
    synopsisIsMath?: boolean,
    description: string,
    copyOnClick: boolean
}

const ManualItem: React.FC<Props> = ({synopsis, description, copyOnClick, synopsisIsMath}) => {
    const copyManualContentOnClick = useSelector((state: RootState) => state.settings.interfaceSettings.copyManualContentOnClick);
    const dispatch = useDispatch();
    const history = useHistory();
    const copyable = copyOnClick && copyManualContentOnClick;

    const synopsisOnClick = () => {
        if (copyable) {
            dispatch(changeCurrentInput(synopsis));
            history.push("/");
        }
    }

    const roles = [];
    if (copyOnClick) roles.push("button");
    if (synopsisIsMath) roles.push("math");
    const role = roles.join(" ");

    return (
        <>
            <Synopsis
                onClick={synopsisOnClick}
                copyable={copyable}
                {...(role.length > 0 ? {role: role} : {})}
            >
                {synopsis}
            </Synopsis>
            <Description>
                {description.split("<br>").map(line => <span>{line}</span>)}
            </Description>
        </>
    )
}

export default ManualItem;