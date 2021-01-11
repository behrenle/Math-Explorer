import styled from "styled-components";

// todo move focus control into cell component
const Cell = styled.li`
  margin: 10px 0;
  border: 1px solid ${props => props.theme.documentCell.borderColor};
  padding: 10px;

  & dd, dt {
    padding: 0;
    margin: 0;
  }

  & dl {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  &:focus {
    border-color: ${props => props.theme.documentCell.borderSelectedColor};
    border-style: solid;
    border-width: 1px 1px 1px 4px;
    padding: 10px 10px 10px 7px;
  }
`;

export default Cell;