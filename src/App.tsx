import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { IColumnContent } from './IColumnContent';
import ReactTooltip from 'react-tooltip';

const StyledApplication = styled.div`
  display: grid;
  grid-template-columns: 300px auto 300px;
  grid-template-areas:
    "header header header"
    "left main right";
`;

const GridContainer = styled.div`
  grid-area: main;
  display: grid;
  overflow: scroll;
  height: calc(100vh - 38px);
`;

export interface ISelectionType {
  type: 'shape' | 'type' | '';
  id: string;
}

export const App: React.FC = () => {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const [grid, setGrid] = useState<IColumnContent[][]>([]);
  const [selection, setSelection] = useState<ISelectionType>({
    type: '',
    id: ''
  });

  useEffect(() => {
    const tempGrid: IColumnContent[][] = [];

    for (let row = 0; row < rows; row++) {
      const tempRow = [];

      for (let column = 0; column < columns; column++) {
        tempRow.push({
          shape: '',
          type: ''
        });
      }

      tempGrid.push(tempRow);
    }

    setGrid(tempGrid);
  }, [rows, columns]);

  return (
    <StyledApplication id="application">
      <Header />
      <LeftSidebar setSelection={setSelection} />
      <GridContainer>
        <Grid
          columns={columns}
          grid={grid}
          setGrid={setGrid}
          selection={selection}
        />
        <ReactTooltip />
      </GridContainer>
      <RightSidebar
        rows={rows}
        setRows={setRows}
        columns={columns}
        setColumns={setColumns}
      />
    </StyledApplication>
  );
};
