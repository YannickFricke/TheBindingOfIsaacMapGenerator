import React from 'react';
import styled from 'styled-components';
import { ISelectionType } from "../App";
import { IColumnContent } from "../IColumnContent";
import { canSetShape, canSetType, updateGrid } from "../Helper";
import { Images } from "../Images";

const StyledGrid = styled.div`
    border: 1px solid #b0b0b0;
    align-self: center;
    justify-self: center;
`;

const GridRow = styled.div`
    height: 32px;
    border-top: 1px solid #b0b0b0;

    &:nth-child(1) {
        border: none;
    }
`;

const GridColumn = styled.div`
    width: 36px;
    height: 32px;
    float: left;
    border-left: 1px solid #b0b0b0;

    &:nth-child(1) {
        border: none;
    }
`;

const RoomTypeImage = styled.img`
    width: 60%;
    height: 60%;
    margin-top: 7px;
    margin-left: 7px;
    pointer-events: none;
`;

interface IGridProps {
    grid: IColumnContent[][];
    setGrid: React.Dispatch<React.SetStateAction<any[]>>
    selection: ISelectionType;
}

export const Grid: React.FC<IGridProps> = (props) => {
    const handleColumnClick = (event: any) => {
        if (props.selection.type === '') {
            return;
        }

        let tempGrid: IColumnContent[][] = [
            ...props.grid,
        ];
        const selectedId = props.selection.id;
        const rowIndex = parseInt(event.target.dataset['row'], 10);
        const columnIndex = parseInt(event.target.dataset['column'], 10);

        switch (props.selection.type) {
            case "shape":
                if (!canSetShape(
                    selectedId,
                    rowIndex,
                    columnIndex,
                    tempGrid,
                )) {
                    return;
                }

                tempGrid = updateGrid(
                    selectedId,
                    rowIndex,
                    columnIndex,
                    tempGrid,
                );

                break;

            case "type":
                if (!canSetType(
                    rowIndex,
                    columnIndex,
                    tempGrid,
                )) {
                    return;
                }

                tempGrid[rowIndex][columnIndex].type = selectedId;
                break;
        }

        props.setGrid(tempGrid);
    };

    return <StyledGrid>
        {props.grid.map((row: IColumnContent[], rowIndex: number) => {
            return <GridRow key={rowIndex}>
                {row.map((column: IColumnContent, columnIndex: number) => {
                    return <GridColumn key={columnIndex}
                                       onClick={handleColumnClick}
                                       data-row={rowIndex}
                                       data-column={columnIndex}
                                       style={{
                                           backgroundImage: column.shape !== '' ?
                                               `url("${(Images.shapeSprites as any)[column.shape]}")` : '',
                                       }}
                    >
                        {column.type !== '' && <RoomTypeImage src={(Images.types as any)[column.type]}/>}
                    </GridColumn>;
                })}
            </GridRow>;
        })}
    </StyledGrid>;
};
