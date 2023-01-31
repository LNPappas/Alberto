import { combineReducers } from "redux";
import { allUSAGasReducer } from "./gas-reducers/allUSAGas-reducer";

export interface IAllUSAGasState {
  allUsaGas: [];
  errorMessage: string;
}

export interface IState {
  allUSAGasState: IAllUSAGasState;
}

export const state = combineReducers<IState>({
  allUSAGasState: allUSAGasReducer,
});
