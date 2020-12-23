import styled from "styled-components";

const Cell = styled.li<{ selected: boolean }>`
  margin: 10px 0;
  ${props => props.selected === true
          ? ` border-color: ${props.theme.documentCell.borderSelectedColor};
              border-style: solid;
              border-width: 1px 1px 1px 4px;
              padding: 10px 10px 10px 7px;`
          : ` border: 1px solid ${props.theme.documentCell.borderColor};
              padding: 10px;`
  }
  
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
`;

export default Cell;