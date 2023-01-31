import gasScrapper from "../../helpers/gas-scraper";
import { getAllUSAGas } from "../../remote/gas-api/all-usa-gas";

export const gasTypes = {
  SUCCESSFUL_REQUEST: "SUCCESSFUL_All_USA_GAS",
  AUTHORIZATION_ERROR: "UNAUTHORIZED",
  EMPTY_LIST: "NO_GAS_PRICES",
  INTERNAL_SERVER: "INTERNAL_SERVER",
};

export const allUSAGasActionMapper = () => async (dispatch: any) => {
  try {
    let allUSAGas = await getAllUSAGas();
    if (allUSAGas.length === 0) {
      throw new Error("no gas prices");
    }
    allUSAGas = gasScrapper(allUSAGas);
    dispatch({
      type: gasTypes.SUCCESSFUL_REQUEST,
      payload: {
        allUSAGas,
      },
    });
  } catch (error: any) {
    if (error.message.includes("401")) {
      dispatch({
        type: gasTypes.AUTHORIZATION_ERROR,
      });
    } else if (error.message.includes("no gas prices")) {
      dispatch({
        type: gasTypes.EMPTY_LIST,
      });
    } else {
      dispatch({
        type: gasTypes.INTERNAL_SERVER,
      });
    }
  }
};
