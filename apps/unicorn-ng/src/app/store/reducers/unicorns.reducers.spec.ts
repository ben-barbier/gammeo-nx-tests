import { Unicorn } from '../../shared/models/unicorn.model';
import * as UnicornsActions from '../actions/unicorns.actions';
import { unicornsReducer } from './unicorns.reducers';

const treeUnicorns = [{ id: 1 } as Unicorn, { id: 2 } as Unicorn, { id: 3 } as Unicorn];

describe('unicorns.reducers', () => {
    it('should delete unicorn on deleteUnicornSuccess', () => {
        // Given
        const unicornToDelete: Unicorn = { id: 1 } as Unicorn;
        const action = UnicornsActions.deleteUnicornSuccess({ unicorn: unicornToDelete });
        const state: Unicorn[] = treeUnicorns;

        // When
        const newState = unicornsReducer(state, action);

        // Then
        expect(newState.length).toBe(2);
    });

    it('deleteUnicorn', () => {
        // Given
        const unicornToDelete: Unicorn = { id: 1 } as Unicorn;
        const action = UnicornsActions.deleteUnicorn({ unicorn: unicornToDelete });
        const state: Unicorn[] = treeUnicorns;

        // When
        const newState = unicornsReducer(state, action);

        // Then
        expect(newState).toBe(state);
    });
});
