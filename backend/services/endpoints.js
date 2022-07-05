import dotenv from 'dotenv'
dotenv.config()

const url = process.env.API_URL
const apiKey = process.env.API_KEY

const endPoints = {
  getCurrencies() {
    return `${url}/currencies.json`
  },
  getLatest(symbol) {
    return url + `/latest.json?app_id=${apiKey}&symbols=${symbol}`
  },
  getHistorical(date, symbol) {
    return `${url}/historical/${date}.json?app_id=${apiKey}&symbols=${symbol}`
  },
}
export default endPoints
