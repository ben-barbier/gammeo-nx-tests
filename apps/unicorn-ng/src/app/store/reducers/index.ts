import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { cartReducer } from './cart.reducers';
import { unicornsReducer } from './unicorns.reducers';
import { Action } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface EntityState {
    unicorns: Unicorn[];
    cart: number[]; // Identifiants de licornes
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: unicornsReducer,
    cart: cartReducer,
    // here is where i put other reducers, when i have them
};

const localStorageSyncReducer = (reducer: ActionReducer<EntityState>): ActionReducer<EntityState> => {
    return localStorageSync({ keys: ['unicorns', 'cart'], rehydrate: true })(reducer);
};

export const metaReducers: MetaReducer<EntityState, Action>[] = [localStorageSyncReducer];
