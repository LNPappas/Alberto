import { IAllUSAGasState } from "..";
import { AnyAction } from "redux";
import { gasTypes } from "../../action-mappers/gas-action-mappers/allUSAGas-action-mapper";

const initialState: IAllUSAGasState = {
  allUsaGas: [],
  errorMessage: "",
};

export const allUSAGasReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case gasTypes.AUTHORIZATION_ERROR: {
      return {
        ...state,
        errorMessage: "Unauthorized to access API",
      };
    }
    case gasTypes.EMPTY_LIST: {
      return {
        ...state,
        errorMessage: "No gas prices to display",
      };
    }
    case gasTypes.INTERNAL_SERVER: {
      return {
        ...state,
        errorMessage: "Oops, Something Went Wrong",
      };
    }
    case gasTypes.SUCCESSFUL_REQUEST: {
      return {
        ...state,
        allUsaGas: action.payload.allUSAGas,
      };
    }
    default: {
      return state;
    }
  }
};
