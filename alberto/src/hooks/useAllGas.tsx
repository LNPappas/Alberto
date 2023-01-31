import { useDispatch } from "react-redux";
import { allUSAGasActionMapper } from "../action-mappers/gas-action-mappers/allUSAGas-action-mapper";

const useAllUsaGas = async () => {
  const dispatch = useDispatch();
  let thunk: any = allUSAGasActionMapper();
  dispatch(thunk);
};

export default useAllUsaGas;
