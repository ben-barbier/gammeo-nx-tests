import { Unicorn } from '../../shared/models/unicorn.model';
import * as UnicornsActions from '../actions/unicorns.actions';
import * as CartActions from '../actions/cart.actions';
import { cartReducer } from './cart.reducers';

describe('cart.reducers', () => {
    it('should remove unicorn from cart on deleteUnicornSuccess', () => {
        // Given
        const unicornToDelete: Unicorn = { id: 1 } as Unicorn;
        const action = UnicornsActions.deleteUnicornSuccess({ unicorn: unicornToDelete });
        const state = [1, 2, 3];

        // When
        const newState = cartReducer(state, action);

        // Then
        expect(newState.length).toBe(2);
    });

    describe('toggleUnicornFromCart', () => {
        const unicorn = { id: 1 } as Unicorn;
        const action = CartActions.toggleUnicornFromCart({ unicorn });

        test('should add unicorn to cart on toggleUnicornFromCart if unicorn is not in cart', () => {
            // Given
            const state: number[] = [];

            // When
            const newState = cartReducer(state, action);

            // Then
            expect(newState).toEqual([unicorn.id]);
        });

        it('should remove unicorn from cart on toggleUnicornFromCart if unicorn is in cart', () => {
            // Given
            const state: number[] = [1];

            // When
            const newState = cartReducer(state, action);

            // Then
            expect(newState.length).toBe(0);
        });
    });
});
