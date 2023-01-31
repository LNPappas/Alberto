import { serverClient } from ".";

export const getAllUSAGas = async () => {
  try {
    let response = await serverClient.get("San Francisco");
    return response.data;
  } catch (error) {
    throw error;
  }
};
