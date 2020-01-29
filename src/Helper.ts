import { IColumnContent } from './IColumnContent';

export const extractId = (url: string): string => {
    const urlParts = url.split('/');
    const fileName = urlParts[urlParts.length - 1];
    const fileParts = fileName.split('.');
    return fileParts[0];
};
export const canSetShape = (
    shape: string,
    rowIndex: number,
    columnIndex: number,
    grid: IColumnContent[][],
): boolean => {
    let result = true;

    switch (shape) {
    case '4':
    case '5':
        result = rowIndex !== grid.length - 1;
        break;
    case '6':
    case '7':
        result = (grid[rowIndex].length - 1 !== columnIndex);
        break;
    case '8':
        result = (rowIndex !== grid.length - 1) && (grid[rowIndex].length - 1 !== columnIndex);
        break;
    case '9':
        result = (grid[rowIndex].length - 1 !== columnIndex) && (rowIndex !== grid.length - 1);
        break;
    case '10':
        result = (rowIndex !== grid.length - 1) && (grid[rowIndex].length - 1 !== columnIndex);
        break;
    case '11':
        result = (grid[rowIndex].length - 1 !== columnIndex) && (rowIndex !== grid.length - 1);
        break;
    case '12':
        result = (grid[rowIndex].length - 1 !== columnIndex) && (rowIndex !== grid.length - 1);
        break;
    }

    return result;
};
export const canSetType = (
    rowIndex: number,
    columnIndex: number,
    grid: IColumnContent[][],
): boolean => {
    const element = grid[rowIndex][columnIndex];

    if (element.shape === '') {
        return false;
    }

    if (element.shape.indexOf('_') > -1) {
        const shapeParts = element.shape.split('_');

        if (shapeParts[1] !== '0') {
            return false;
        }
    }

    return true;
};

const removeFromGrid = (
    rowIndex: number,
    columnIndex: number,
    grid: IColumnContent[][],
): IColumnContent[][] => {
    const tempGrid = [
        ...grid,
    ];

    const shapeId = grid[rowIndex][columnIndex].shape;

    switch (shapeId) {
    case '1':
    case '2':
    case '3':
        grid[rowIndex][columnIndex] = {
            shape: '',
            type: '',
        };
        break;
    default:
        // eslint-disable-next-line no-case-declarations
        const [
            extractedShapeId,
            spriteIndex,
        ] = shapeId.split('_');

        switch (extractedShapeId) {
        case '4':
        case '5':
            switch (spriteIndex) {
            case '0':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            case '1':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex - 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            }
            break;
        case '6':
        case '7':
            switch (spriteIndex) {
            case '0':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '1':
                tempGrid[rowIndex][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            }
            break;
        case '8':
            switch (spriteIndex) {
            case '0':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '1':
                tempGrid[rowIndex][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '2':
                tempGrid[rowIndex - 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex - 1][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '3':
                tempGrid[rowIndex - 1][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex - 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            }
            break;
        case '9':
            switch (spriteIndex) {
            case '0':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            case '1':
                tempGrid[rowIndex - 1][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '2':
                tempGrid[rowIndex - 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            }
            break;
        case '10':
            switch (spriteIndex) {
            case '0':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '1':
                tempGrid[rowIndex - 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '2':
                tempGrid[rowIndex - 1][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            }
            break;
        case '11':
            switch (spriteIndex) {
            case '0':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '1':
                tempGrid[rowIndex][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            case '2':
                tempGrid[rowIndex - 1][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex - 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            }
            break;
        case '12':
            switch (spriteIndex) {
            case '0':
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex + 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            case '1':
                tempGrid[rowIndex][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex - 1][columnIndex - 1] = {
                    shape: '',
                    type: '',
                };
                break;
            case '2':
                tempGrid[rowIndex - 1][columnIndex] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex - 1][columnIndex + 1] = {
                    shape: '',
                    type: '',
                };
                tempGrid[rowIndex][columnIndex] = {
                    shape: '',
                    type: '',
                };
                break;
            }
            break;
        }
        break;
    }

    return tempGrid;
};

export const cleanupGrid = (
    shape: string,
    rowIndex: number,
    columnIndex: number,
    grid: IColumnContent[][],
): IColumnContent[][] => {
    let tempGrid = [
        ...grid,
    ];

    switch (shape) {
    case '1':
    case '2':
    case '3':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex,
            grid,
        );
        tempGrid[rowIndex][columnIndex] = {
            shape: shape,
            type: '',
        };
        break;
    case '4':
    case '5':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex,
            grid,
        );
        tempGrid[rowIndex][columnIndex] = {
            shape: `${shape}_0`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex] = {
            shape: `${shape}_1`,
            type: '',
        };
        break;
    case '6':
    case '7':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex + 1,
            grid,
        );
        tempGrid[rowIndex][columnIndex] = {
            shape: `${shape}_0`,
            type: '',
        };
        tempGrid[rowIndex][columnIndex + 1] = {
            shape: `${shape}_0`,
            type: '',
        };
        break;
    case '8':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex + 1,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            grid,
        );
        tempGrid[rowIndex][columnIndex] = {
            shape: `${shape}_0`,
            type: '',
        };
        tempGrid[rowIndex][columnIndex + 1] = {
            shape: `${shape}_1`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex] = {
            shape: `${shape}_2`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex + 1] = {
            shape: `${shape}_3`,
            type: '',
        };
        break;
    case '9':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex + 1,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            grid,
        );
        tempGrid[rowIndex][columnIndex + 1] = {
            shape: `${shape}_0`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex] = {
            shape: `${shape}_1`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex + 1] = {
            shape: `${shape}_2`,
            type: '',
        };
        break;
    case '10':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            grid,
        );
        tempGrid[rowIndex][columnIndex] = {
            shape: `${shape}_0`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex] = {
            shape: `${shape}_1`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex + 1] = {
            shape: `${shape}_2`,
            type: '',
        };
        break;
    case '11':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex + 1,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            grid,
        );
        tempGrid[rowIndex][columnIndex] = {
            shape: `${shape}_0`,
            type: '',
        };
        tempGrid[rowIndex][columnIndex + 1] = {
            shape: `${shape}_1`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex + 1] = {
            shape: `${shape}_2`,
            type: '',
        };
        break;
    case '12':
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex,
            columnIndex + 1,
            grid,
        );
        tempGrid = removeFromGrid(
            rowIndex + 1,
            columnIndex,
            grid,
        );
        tempGrid[rowIndex][columnIndex] = {
            shape: `${shape}_0`,
            type: '',
        };
        tempGrid[rowIndex][columnIndex + 1] = {
            shape: `${shape}_1`,
            type: '',
        };
        tempGrid[rowIndex + 1][columnIndex] = {
            shape: `${shape}_2`,
            type: '',
        };
        break;
    }

    return tempGrid;
};

export const updateGrid = (
    shape: string,
    rowIndex: number,
    columnIndex: number,
    grid: IColumnContent[][],
): IColumnContent[][] => {
    const tempGrid = [
        ...grid,
    ];

    switch (shape) {
    case '1':
    case '2':
    case '3':
        removeFromGrid(
            rowIndex,
            columnIndex,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex].shape = shape;
        break;
    case '4':
    case '5':
        removeFromGrid(
            rowIndex,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex].shape = `${shape}_0`;
        tempGrid[rowIndex + 1][columnIndex].shape = `${shape}_1`;
        break;
    case '6':
    case '7':
        removeFromGrid(
            rowIndex,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex,
            columnIndex + 1,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex].shape = `${shape}_0`;
        tempGrid[rowIndex][columnIndex + 1].shape = `${shape}_1`;
        break;
    case '8':
        removeFromGrid(
            rowIndex,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex,
            columnIndex + 1,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex].shape = `${shape}_0`;
        tempGrid[rowIndex][columnIndex + 1].shape = `${shape}_1`;
        tempGrid[rowIndex + 1][columnIndex].shape = `${shape}_2`;
        tempGrid[rowIndex + 1][columnIndex + 1].shape = `${shape}_3`;
        break;
    case '9':
        removeFromGrid(
            rowIndex,
            columnIndex + 1,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex + 1].shape = `${shape}_0`;
        tempGrid[rowIndex + 1][columnIndex].shape = `${shape}_1`;
        tempGrid[rowIndex + 1][columnIndex + 1].shape = `${shape}_2`;
        break;
    case '10':
        removeFromGrid(
            rowIndex,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex].shape = `${shape}_0`;
        tempGrid[rowIndex + 1][columnIndex].shape = `${shape}_1`;
        tempGrid[rowIndex + 1][columnIndex + 1].shape = `${shape}_2`;
        break;
    case '11':
        removeFromGrid(
            rowIndex,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex,
            columnIndex + 1,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex + 1,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex].shape = `${shape}_0`;
        tempGrid[rowIndex][columnIndex + 1].shape = `${shape}_1`;
        tempGrid[rowIndex + 1][columnIndex + 1].shape = `${shape}_2`;
        break;
    case '12':
        removeFromGrid(
            rowIndex,
            columnIndex,
            tempGrid,
        );
        removeFromGrid(
            rowIndex,
            columnIndex + 1,
            tempGrid,
        );
        removeFromGrid(
            rowIndex + 1,
            columnIndex,
            tempGrid,
        );
        tempGrid[rowIndex][columnIndex].shape = `${shape}_0`;
        tempGrid[rowIndex][columnIndex + 1].shape = `${shape}_1`;
        tempGrid[rowIndex + 1][columnIndex].shape = `${shape}_2`;
        break;
    }

    return tempGrid;
};
