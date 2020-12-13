import { combineReducers } from 'redux';
import { dishesReducer } from './dishesReducer';

export const rootReducer = combineReducers({
  dishes: dishesReducer
})

export type RootState = ReturnType<typeof rootReducer>