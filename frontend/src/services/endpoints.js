const url = import.meta.env.VITE_URL_BACKEND

const endPoints = {
  getCurrencies() {
    return `${url}/api/currencies`
  },
  getLatest(symbol) {
    return url + `/api/latest/${symbol}`
  },
  getHistorical(date, symbol) {
    return `${url}/api/historical?date=${date}&symbol=${symbol}`
  },
}
export default endPoints
