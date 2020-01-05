import {GridActions, InitialiseGridAction} from './grid.actions';
import * as gridReducers from './grid.reducers';
import {GridState, initialGridState} from './grid.reducers';

describe('Grid reducers', () => {
  describe('Undefined action', () => {
    it('Should return the default state', () => {
      const undefinedAction: GridActions = {
        payload: 12,
        type: 'undefinedAction'
      };
      const state: GridState = gridReducers.gridReducers(undefined, undefinedAction);
      expect(state).toBe(initialGridState);
    });
  });

  describe('Initialise grid action', () => {
    it('Number of rows should be equal to the grid size provided', () => {
      const initialiseGridAction: InitialiseGridAction = {
        payload: 15,
        type: 'INITIALISE_GRID'
      };
      const state: GridState = gridReducers.gridReducers(undefined, initialiseGridAction);
      expect(state.tableRows.length).toBe(initialiseGridAction.payload);
    });

    it('Number of table headers should be equal to the grid size', () => {
      const initialiseGridAction: InitialiseGridAction = {
        payload: 15,
        type: 'INITIALISE_GRID'
      };
      const state: GridState = gridReducers.gridReducers(undefined, initialiseGridAction);
      expect(state.tableHeaders.length).toBe(initialiseGridAction.payload);
    });

    it('the number of cells in each row should be equal to the grid size', () => {
      const initialiseGridAction: InitialiseGridAction = {
        payload: 15,
        type: 'INITIALISE_GRID'
      };
      const state: GridState = gridReducers.gridReducers(undefined, initialiseGridAction);
      expect(
        state.tableRows.filter(r => r.cells.length === state.gridSize)
          .length === state.gridSize
      );
    });
  });
});
