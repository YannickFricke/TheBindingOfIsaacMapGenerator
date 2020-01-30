import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ISelectionType } from '../App';
import { canSetShape, canSetType, updateGrid } from '../Helper';
import { IColumnContent } from '../IColumnContent';
import { Images } from '../Images';

interface IStyledGridProps {
    columns: number;
}

const StyledGrid: React.FC<IStyledGridProps> = styled.div`
    border: 1px solid #b0b0b0;
    align-self: center;
    justify-self: center;
    margin-top: 5px;
    ${(props: IGridProps): FlattenSimpleInterpolation => css`
        width: calc(${props.columns} * 37px);
    `}
`;

const GridRow = styled.div`
    height: 32px;
    border-top: 1px solid #b0b0b0;

    &:nth-child(1) {
        border: none;
    }
`;

const GridColumn: React.FC<React.HTMLProps<HTMLDivElement>> = styled.div`
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
    columns: number;
    setGrid: React.Dispatch<React.SetStateAction<IColumnContent[][]>>;
    selection: ISelectionType;
}

export const Grid: React.FC<IGridProps> = props => {
    const handleColumnClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (props.selection.type === '') {
            return;
        }

        let tempGrid: IColumnContent[][] = [...props.grid];
        const selectedId = props.selection.id;
        const target = event.target as HTMLDivElement;
        const rowIndex = parseInt(target.dataset['row'] || '', 10);
        const columnIndex = parseInt(target.dataset['column'] || '', 10);

        if (isNaN(rowIndex) || isNaN(columnIndex)) {
            return;
        }

        switch (props.selection.type) {
        case 'shape':
            if (!canSetShape(selectedId, rowIndex, columnIndex, tempGrid)) {
                return;
            }

            tempGrid = updateGrid(selectedId, rowIndex, columnIndex, tempGrid);

            break;

        case 'type':
            if (!canSetType(rowIndex, columnIndex, tempGrid)) {
                return;
            }

            tempGrid[rowIndex][columnIndex].type = selectedId;
            break;
        }

        props.setGrid(tempGrid);
    };

    return (
        <StyledGrid columns={props.columns}>
            {props.grid.map((row: IColumnContent[], rowIndex: number) => {
                return (
                    <GridRow key={rowIndex}>
                        {row.map((column: IColumnContent, columnIndex: number) => {
                            return (
                                <GridColumn
                                    key={columnIndex}
                                    onClick={handleColumnClick}
                                    data-row={rowIndex}
                                    data-column={columnIndex}
                                    style={{
                                        backgroundImage: column.shape !== ''
                                            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            `url("${(Images.shapeSprites as any)[column.shape]}")`
                                            : ''
                                    }}
                                >
                                    {column.type !== '' && (
                                        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                                        <RoomTypeImage src={(Images.types as any)[column.type]} />
                                    )}
                                </GridColumn>
                            );
                        })}
                    </GridRow>
                );
            })}
        </StyledGrid>
    );
};