import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import { SidebarHeading } from './SidebarHeading';
import { ISelectionType } from '../App';
import { ShapesSelector } from './ShapesSelector';
import { TypesSelector } from './TypesSelector';

const StyledLeftSidebar = styled(Sidebar)`
    grid-area: left;
`;

const RoomShapesContainer = styled.div`
    margin-bottom: 10px;
`;

interface ILeftSidebarProps {
    setSelection: React.Dispatch<React.SetStateAction<ISelectionType>>;
}

export const LeftSidebar: React.FC<ILeftSidebarProps> = (props) => {
    return <StyledLeftSidebar id="sidebar-left">
        <RoomShapesContainer>
            <SidebarHeading>
                Room shapes
            </SidebarHeading>
            <ShapesSelector setSelection={props.setSelection} />
        </RoomShapesContainer>

        <SidebarHeading>
            Room types
        </SidebarHeading>
        <TypesSelector setSelection={props.setSelection} />
    </StyledLeftSidebar>
};
