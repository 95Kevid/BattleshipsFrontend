import { GridParameters } from '../models/gridParameters';
import { BoardPosition } from '../models/board-position';
import { Row } from '../models/row';
import { Injectable } from '@angular/core';

@Injectable()
export class GameGridService {
  // initialiseGrid(gridSize: number): GridParameters {
  //   const gridParameters: GridParameters = new GridParameters();
  //   gridParameters.tableHeaders = [];
  //   gridParameters.tableRows = [];
  //
  //   for (let i = 0; i < gridSize; i++) {
  //     gridParameters.tableHeaders[i] = String.fromCharCode(65 + i);
  //   }
  //
  //   for (let i = 0; i < gridSize; i++) {
  //     const boardPositions: Cell[] = [];
  //     for (let j = 0; j < gridSize; j++) {
  //       const cell: Cell = {
  //         col: gridParameters.tableHeaders[j].toString(),
  //         row: (i),
  //         colour: 'blue',
  //         hit: false,
  //         equals: c => {
  //           return c.col === cell.col
  //             && c.row === cell.row;
  //         }
  //       };
  //       boardPositions[j] = cell;
  //     }
  //     gridParameters.tableRows[i] = new Row(boardPositions);
  //   }
  //   return gridParameters;
  //
  // }
}