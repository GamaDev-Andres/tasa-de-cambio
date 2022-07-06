import endPoints from "./endpoints";

export const getCurrenciesRequest = async () => {
  try {
    const res = await fetch(endPoints.getCurrencies());
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getLatestRequest = async (symbol) => {
  try {
    const res = await fetch(endPoints.getLatest(symbol));
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getHistoricalRequest = async (date, symbol) => {
  try {
    const res = await fetch(endPoints.getHistorical(date, symbol));
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
