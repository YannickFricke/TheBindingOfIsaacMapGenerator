import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import { SidebarHeading } from './SidebarHeading';

const StyledRightSidebar = styled(Sidebar)`
    grid-area: right;
`;

const InputDescription = styled.span`
    color: #707070;
`;

const StyledInput = styled.input`
    border: 0;
    border-bottom: 1px solid #707070;
    width: 25px;
    float: right;
    text-align: center;
    color: #7d7d7d;
`;

const Notice = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  padding: 2px;
  color: red;
  text-align: center;
  word-break: break-word;
  position: fixed;
  float: right;
  border: 1px solid red;
  border-radius: 5px;
  background-color: rgba(255,0,0,0.1);
  font-size: 15px;
`;

interface IRightSidebarProps {
    rows: number;
    setRows: React.Dispatch<React.SetStateAction<number>>

    columns: number;
    setColumns: React.Dispatch<React.SetStateAction<number>>
}

export const RightSidebar: React.FC<IRightSidebarProps> = (props) => {
    const handleRowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);

        if (isNaN(newValue)) {
            return;
        }

        props.setRows(newValue);
    };

    const handleColumnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);

        if (isNaN(newValue)) {
            return;
        }

        props.setColumns(newValue);
    };

    return <StyledRightSidebar>
        <SidebarHeading>Map size</SidebarHeading>

        <div>
            <InputDescription>Rows:</InputDescription>
            <StyledInput type="text" defaultValue={props.rows} onChange={handleRowChange} />
        </div>
        <div>
            <InputDescription>Columns:</InputDescription>
            <StyledInput type="text" defaultValue={props.columns} onChange={handleColumnChange} />
        </div>

        <Notice>
            Changing one of these values will delete your current data
        </Notice>
    </StyledRightSidebar>;
};
