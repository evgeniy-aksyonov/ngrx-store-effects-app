import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer
};
